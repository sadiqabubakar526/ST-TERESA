import React from 'react'
import '../../CSS/Footer.css'
import { Icon } from 'react-icons-kit'
import { ic_local_pharmacy } from 'react-icons-kit/md/ic_local_pharmacy'
import heartbeats from '../../images/heartbeats.PNG'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { facebook } from 'react-icons-kit/icomoon/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'

export const Footer = () => {
    return (
        <div className='footer-box'>
            {/* logo */}
            <div className='logo'>
                <div className='logo-icon'>
                    <Icon icon={ic_local_pharmacy} size={40} />
                </div>
                <div className='logo-text'>ST.TERESA</div>
            </div>
            {/* contact */}
            <div className='contact-box'>
                <div className='heading'>Contact Info</div>
                <br />
                <div className='info'>
                    ST.TERESA Pharmacy Inc. Owode Ogun State Idiroko Road.<br /> 
                </div>
                <br />
                <div className='info'>Email: 1050@st.teresa.com</div>
                <div className='info'>Phone: +1*************</div>
                <div className='info'>WhatsApp: https://wa.me/+2348128031681</div>
            </div>
            {/* links */}
            <div className='contact-box'>
                <div className='heading'>Quick Links</div>
                <br />
                <div className='info'>
                    Contact Us
                </div>
                <div className='info'>Careers</div>
                <br />
                <div className='follow-us-links'>
                    <span className='links-box'>
                        <Icon icon={facebook} />
                    </span>
                    <span className='links-box'>
                        <Icon icon={twitter} />
                    </span>
                    <span className='links-box'>
                        <Icon icon={instagram} />
                    </span>
                </div>
            </div>
            {/* img */}
            <div className='img'>
                <img src={heartbeats} alt="" />
            </div>
        </div>
    )
}
