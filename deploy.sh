#!/bin/bash
# AI Tools deploy script - build and restart
set -e
cd /root/ai-tools
echo "📦 Building..."
npx next build
echo "🔄 Restarting service..."
systemctl restart ai-tools
sleep 2
if systemctl is-active ai-tools > /dev/null; then
  echo "✅ Deploy success!"
else
  echo "❌ Deploy failed!"
  systemctl status ai-tools
fi
