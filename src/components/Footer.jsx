import React from 'react'
import { Link } from "react-router-dom";
import "./HomePage/HomePage.css";
const Footer = ({ props }) => {
        const {
          termsConditions,
          copyright,
        } = props;

  return (
      <div>

    <hr className="line9 hrlineFull" />
    <div className="footerContainer">
      <div className="customeContainer">
        <div className="flex-row" style={{marginBottom: '12px'}}>
          
        </div>
        <div className="flex-row-1 socialSbuscrib">
          <div className="footerSocilaList">
          <div className="join-our-community valign-text-middle jost-semi-bold-white-15px">Join our community</div>
            <div className="footerSocial">
              <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_Club"><img className="twitter" src="/img/twitter-1@2x.svg" alt="" /></a>
              <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi-club"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt="" /></a>
              <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiClub"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
              <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_club/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt="" /></a>
              <a target="blank" alt="discord" href="https://discord.com/invite/m2sfKE97NU"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
              <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt="" /></a>
            </div>
          </div>
          
          <div className="footSubscrib">
            <p className="stay-tuned-for-more valign-text-middle jost-semi-bold-white-15px">
              Stay tuned for more details by subscribing to our newsletter!
            </p>
            <div className="footerSubscrib">
              <div id="mc_embed_signup">
                  <form action="https://archytas.us2.list-manage.com/subscribe/post?u=73a0cb8922213cdf019fdd867&amp;id=7bd09f5369" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                          <div class="mc-field-group">
                              <img src="/img/mail.svg" alt="mail"/>
                              <input type="email"  name="EMAIL" id="mce-EMAIL" placeholder="Your e-mail" />
                          </div>
                          <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                      </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row-1 footerBottomArea">
          <div className="terms-conditions valign-text-middle jost-semi-bold-white-15px">
            {/* <Link to="/terms-conditions" className="jost-semi-bold-white-15px">{termsConditions}</Link> */}
          </div>
          <p className="copyright valign-text-middle jost-semi-bold-white-15px">
            {/* <a target="blank" href="https://bwindi.io/" className="jost-semi-bold-white-15px">{copyright}</a> */}
          </p>
        </div>
    </div>
    </div>
      </div>
  )
}
export default Footer