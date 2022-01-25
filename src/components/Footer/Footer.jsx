import React from 'react';
// icons
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import logo from '../../images/logo.png'
// styles
import {
  FooterContainer,
  FooterWrapper,
  FooterRow,
  FooterCol,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterIcon,
  FooterLogo
} from './styles'

const footerCol = [
  {
    footerTitle: 'the api',
    footerList: [
      {
        itemLink: 'https://www.tvmaze.com/api#episode-main-information',
        itemList: 'about the api'
      },
      {
        itemLink: 'https://www.tvmaze.com/blog',
        itemList: 'blog'
      },
      {
        itemLink: 'https://www.tvmaze.com/faqs/9/data-policies',
        itemList: 'data policies'
      },
    ]
  },
  {
    footerTitle: 'copyrights',
    footerList: [
      {
        itemLink: 'https://www.tvmaze.com/site/copyright',
        itemList: 'Copyright Policy'
      },
      {
        itemLink: 'https://www.tvmaze.com/site/privacy',
        itemList: 'Privacy Policy'
      },
      {
        itemLink: 'https://www.tvmaze.com/site/tos',
        itemList: 'ToS'
      },
    ]
  },
  {
    footerTitle: 'follow us on',
    footerList: [
      {
        itemLink: 'https://www.facebook.com/tvmaze',
        itemList: 'facebook',
        itemIcon: <FaFacebook />
      },
      {
        itemLink: 'https://www.instagram.com/tvmazecom/',
        itemList: 'instagram',
        itemIcon: <FaInstagram />
      },
      {
        itemLink: 'https://twitter.com/tvmaze',
        itemList: 'twitter',
        itemIcon: <FaTwitter />
      },
    ]
  }
]

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRow>
          {
            footerCol?.map((col) => (
              <FooterCol key={col?.footerTitle}>
                <FooterTitle>{col?.footerTitle}</FooterTitle>
                {
                  col?.footerList.map((list) => (
                    <FooterList key={list?.itemList}>
                      <a href={list?.itemLink} target='_blank' rel='noreferrer'>
                        <FooterItem>
                          <FooterIcon>{list?.itemIcon}</FooterIcon>
                          {list?.itemList}
                        </FooterItem>
                      </a>
                    </FooterList>
                  ))
                }
              </FooterCol>
            ))
          }
          <FooterLogo src={logo} alt='logo'/>
        </FooterRow>
      </FooterWrapper>
    </FooterContainer>
  )
};

export default Footer;