import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export const HeaderFull = styled.div`
  width: 100%;
  background: #fff;
  height: 65px;
  min-width: auto;
  margin: auto;
`;
export const HeaderWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 5px 15px;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
`;

export const Logo = styled.h1`
  font-size: 20px;
  margin-left: -1rem;
`;
export const Menu = styled.div`
  display: flex;
  justify-content: start;
  align-item: center;
  margin-top: 1rem;
`;
export const MenuRight = styled(Menu)`
  margin-top: 0.2rem;
  margin-left: 1rem;
  margin-right: 0.1rem;
`;
export const MenuList = styled.ul`
  margin-left: 1.3em;
  padding: 0;
  display: flex;
  justify-content: start;
`;
export const MenuListDropDown = styled.ul`
  margin-top: 0.3em;
  display: block;
`;

export const MenuItem = styled.li`
  margin-bottom: 1em;
  margin-left: 1rem;
`;

export const MenuLink = styled(Link)`
  color: black;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: opacity 150ms ease-in-out;
`;

export const MenuDropDown = styled.span`
  color: black;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: opacity 150ms ease-in-out;
  margin-left: 1em;
`;
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;
export const DropDownAccountContent = styled.div`
  display: none;
  background: #f9f9f9;
  position: absolute;
  width: 200px;
  z-index: 1;
  border-radius: 3px;
`;

export const VerticalSeparator = styled.hr`
  border-left: 1px solid #d0d0d0;
  height: 20px;
  margin-left: 0.4rem;
`;
export const Avatar = styled(BsPersonCircle)`
  width: 41px;
  height: 41px;
  margin: 14px auto;
  display: block;
`;
export const SignUp = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10px;
`;
export const UnderSignUp = styled.div`
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 10%), 0 4px 6px 1px rgb(0 0 0 / 10%);
  width: 100%;
  display: block;
  margin-top: 15px;
  padding-top: 5px;
`;
export const Button = styled.a`
  width: 100%;
  cursor: pointer;
  background: #fff;
  float: left;
  text-align: center;
  padding: 7px 5px;
  color: #ef6614;
  font-size: 13px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  outline: 0;
  border: 1px solid #ef6614;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
`;

export const SBLink = styled.a`
  transition: text-indent 0.7s;
  position: relative;
  padding: 5px 10px 5px 22px;
  width: 100%;
  float: left;
  text-decoration: none;
  color: #000;
  font-size: 13px;
`;

export const DownArrowIcon = styled(MdKeyboardArrowDown)`
  font-size: 20px;
  position: relative;
`;
