#!/data/data/com.termux/files/usr/bin/bash

echo "🔄 Synchronisation en cours..." >> ~/sync.log
date >> ~/sync.log
rsync -av --delete ~/storage/shared/Webdev/ ~/projects/management-app/
rsync -av --delete ~/projects/management-app/ ~/storage/shared/Webdev/
echo "✅ Synchronisation terminée !" >> ~/sync.log