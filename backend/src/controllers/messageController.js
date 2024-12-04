const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "your-app-id",
  key: "your-key",
  secret: "your-secret",
  cluster: "your-cluster",
  useTLS: true,
});

exports.sendMessage = async (req, res) => {
  const { conversationId, senderId, content } = req.body;

  try {
    const message = await prisma.message.create({
      data: {
        conversationId,
        senderId,
        content,
      },
    });

    pusher.trigger('chat', 'message', {
      conversationId,
      senderId,
      content,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: 'Message sending failed' });
  }
};
