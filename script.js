* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
  background-color: #0d0f12;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Moldura estilo smartphone */
.phone-frame {
  width: 100%;
  max-width: 380px;
  border-radius: 40px;
  padding: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.phone-screen {
  background: #1a1a1a; /* Escurecido para combinar com os botões/textos claros */
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Cabeçalho do Post */
.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar-small {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}

.more-options {
  cursor: pointer;
  color: #ffffff;
}

/* Mídia / Foto */
.post-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  background-color: #eee;
  cursor: pointer; /* Indicação de que é clicável */
}

.post-media img.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Avatar sobreposto */
.user-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
}

.user-badge img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #fffbfb;
  object-fit: cover;
}

.user-badge .plus-icon {
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: #561296;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
}

/* Ações */
.post-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px 16px;
}

.left-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  background: none;
  border: none;
}

.action-btn svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.15s ease, fill 0.2s ease, stroke 0.2s ease;
}

/* Estilo quando CURTIDO */
.action-btn.liked svg {
  fill: #ef4444;
  stroke: #ef4444;
}

/* Estilo quando SALVO */
.bookmark-btn.bookmarked svg {
  fill: #ffffff;
}

/* Texto de Curtidas */
.post-details {
  padding: 0 16px 12px 16px;
  font-size: 13px;
  color: #e0e5ec;
}

.likes {
  color: #e8ebef;
}

.likes strong {
  color: #e9eef6;
}

/* Barra de Navegação */
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 16px 0;
  border-top: 1px solid #222;
  background: #131010;
}

.nav-item {
  color: #e5e8ee;
  cursor: pointer;
}

.nav-item svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
}