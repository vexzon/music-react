import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  .content{
    height: 70px;
    display: flex;
    justify-content: center;
    .header-func{
      height: 70px;
      min-width: 1280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
  }
  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
display: flex;
  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .select-list{
    display: flex;
    line-height: 70px;
    .select-item{
      position: relative;
      a{
        display: block;
        padding: 0 20px;
        color: #ccc; 
      }
      :last-of-type a {
        position:relative;
        ::after{
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/topbar.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active{
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon{
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%, 0);
        background-position: -226px 0;
        z-index: 1;
      }
    }
  }
`;
export const HeaderRight = styled.div`
display: flex;
align-items: center;
  .search{
    border-radius: 70px;
  }
  .center{
    margin-left: 20px;
    font-size: 12px;
    color: #999;
    border-color: #999;
    &:hover{
      border-color: #fff;
      color: #fff;
    }
  }
  .login{
    color: #999;
    font-size: 12px;
    border:none;
    &:hover{
      color: #fff;
    }
  }
`;