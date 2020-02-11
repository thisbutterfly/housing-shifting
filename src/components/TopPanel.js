import React from "react"

const TopPanel = () => (
  <div
    className="container"
    style={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      marginBottom: "20px",
    }}
  >
    <div className="logo">
      <img src="https://via.placeholder.com/400x100" />
    </div>
    {iconList.map(iconDetails => (
      <>
        <div className="tab-panel">
          <div className="icon">
            <img src={iconDetails.icon} />
          </div>
          <div className="details">
            <p className="info-title">{iconDetails.title}</p>
            <a href={iconDetails.link} className="hyperlink">
              <p className="information">{iconDetails.details}</p>
            </a>
          </div>
        </div>
      </>
    ))}
  </div>
)

const iconList = [
  {
    icon:
      "https://res.cloudinary.com/dqzwyjocc/image/upload/c_scale,w_50,h_50/v1581314511/agrwal-shifting/contact_pctazr.png",
    title: "Phone Number",
    details: "+91-7894561***",
    link: "",
  },
  {
    icon:
      "https://res.cloudinary.com/dqzwyjocc/image/upload/c_scale,w_50,h_50/v1581314511/agrwal-shifting/mail_sg6mou.png",
    title: "Email",
    details: "xyz@email.com",
    link: "",
  },
  {
    icon:
      "https://res.cloudinary.com/dqzwyjocc/image/upload/c_scale,w_50,h_50/v1581314511/agrwal-shifting/world_htj4lp.png",
    title: "Website",
    details: "mywebsite.org",
    link: "/",
  },
]

export default TopPanel
