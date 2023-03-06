import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  AiFillFileAdd,
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import {
  BsCartPlusFill,
  BsDatabaseAdd,
  BsFillQuestionDiamondFill,
} from "react-icons/bs";
import { FaBloggerB, FaClipboardList } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-center text-white py-3 mb-0">
            <span className="sm-logo">M.</span>
            <span className="lg-logo">Market.</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <BsCartPlusFill className="fs-5" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <AiFillFileAdd className="fs-5" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <BsDatabaseAdd className="fs-5" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <AiOutlineUnorderedList className="fs-5" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <BsFillQuestionDiamondFill className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
        className="d-flex justify-content-between align-items-center"
          style={{
            padding: 0,
            background: "white",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="ms-2 me-4">
            <h6>Test</h6>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
