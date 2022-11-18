import icon from "../../assets/img/notification-icon.svg"

import "./styles.css"

function NotificationButton() {
  return (
    <div className="dsmeta-red-botton">
      <img src={icon} alt="Imagem do icone de notificação" />
    </div>
  )
}

export default NotificationButton
