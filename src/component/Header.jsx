import React from "react";
import {
  Logo,
  HeaderFull,
  HeaderWrap,
  HeaderContent,
  Menu,
  MenuRight,
  MenuList,
  MenuItem,
  MenuLink,
  VerticalSeparator,
  MenuListDropDown,
  MenuDropDown,
  DropDownContent,
  DropDownAccountContent,
  UnderSignUp,
  SignUp,
  Avatar,
  Button,
  SBLink,
  DownArrowIcon,
} from "../style/style";
import { languageData, MenuData, MenuRightData, MoreData } from "./MenuData";

const Header = () => {
  return (
    <HeaderFull>
      <HeaderWrap>
        <HeaderContent>
          <Logo>EasyMyTrap</Logo>
          <Menu>
            <MenuList>
              {MenuData.map((item, index) => {
                return (
                  <>
                    <MenuItem key={index}>
                      <MenuLink to={item.path}>{item.title}</MenuLink>
                    </MenuItem>
                    <VerticalSeparator />
                  </>
                );
              })}
            </MenuList>
            <div className="dropdown">
              <MenuDropDown>
                More
                {/* <DownArrowIcon /> */}
                <DropDownContent className="dropdown-content">
                  <MenuListDropDown>
                    {MoreData.map((item, index) => {
                      return (
                        <MenuItem key={index}>
                          <MenuLink to={item.path}>{item.title}</MenuLink>
                        </MenuItem>
                      );
                    })}
                  </MenuListDropDown>
                </DropDownContent>
              </MenuDropDown>
            </div>
          </Menu>
          <MenuRight>
            <div className="dropdown">
              <MenuDropDown>
                24x7 Helpline
                <DropDownContent className="dropdown-content">
                  <MenuListDropDown>
                    {MenuRightData.map((item, index) => {
                      return (
                        <MenuItem key={index}>
                          <MenuLink to={item.path}>{item.title}</MenuLink>
                        </MenuItem>
                      );
                    })}
                  </MenuListDropDown>
                </DropDownContent>
              </MenuDropDown>
            </div>
            <div className="dropdown">
              <MenuDropDown>
                English
                <DropDownContent className="dropdown-content">
                  <MenuListDropDown>
                    {languageData.map((item, index) => {
                      return (
                        <MenuItem key={index}>
                          <MenuLink to={item.path}>{item.title}</MenuLink>
                        </MenuItem>
                      );
                    })}
                  </MenuListDropDown>
                </DropDownContent>
              </MenuDropDown>
            </div>
            <div className="dropdown">
              <MenuDropDown>
                My Account
                <DropDownAccountContent className="dropdown-content">
                  <Avatar />
                  <SignUp>
                    <Button href="#b">Login Or SignUp</Button>
                  </SignUp>
                  <UnderSignUp>
                    <SBLink href="#b">My Booking</SBLink>
                    <SBLink href="#b">Print/ Cancel Booking</SBLink>
                  </UnderSignUp>
                </DropDownAccountContent>
              </MenuDropDown>
            </div>
          </MenuRight>
        </HeaderContent>
      </HeaderWrap>
    </HeaderFull>
  );
};

export default Header;
