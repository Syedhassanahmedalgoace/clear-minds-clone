import React from "react";
import Sidebar from "../SideBar/SideBar";
import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import StatsCard from "../CardComponent/CardComponent";
import AreaInstalledChart from "../../components/AreaInstalledChart/AreaInstalledChart";
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <CiSearch size={24} />
          <div className="flex gap-4 items-center">
            <IoIosSettings size={24} />
            <CgProfile size={24} />
          </div>
        </div>
        {/* Title */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
        </div>
        {/* Cards Section */}
        <div className="flex gap-6 px-6 py-6">
          {/* Welcome Card */}
          <div className="flex items-center justify-between p-6 bg-green-100 rounded-2xl w-200 h-60">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back 👋 <br />
                Fabiana Capmany
              </h2>
              <p className="text-gray-700 mb-4">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn’t anything
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                Go Now
              </button>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/male-project-manager-animation-animated-cartoon-professional-business-man_1029476-117058.jpg"
              alt="dashboard"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Featured App Card */}
          <div className="relative bg-gray-900 text-white rounded-2xl w-1/2 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk9FPEYOJcAtl_diVDNkb-Xng5UWcCVNCrQ&s"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative p-6">
              <p className="text-green-400 uppercase text-xs font-semibold mb-1 mt-25">
                Featured App
              </p>
              <h3 className="text-xl font-bold mb-1 mt-4">
                Strike a yogi pose
              </h3>
              <p className="text-sm text-gray-300 mt-3">
                Get fit with Pocket Yoga's customizable routine...
              </p>
            </div>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
          <StatsCard
            subtitle="Total Active Users"
            title="32.4k"
            percentage="12%"
          />
          <StatsCard subtitle="Total Installed" title="8.7k" percentage="9%" />
          <StatsCard subtitle="Total Downloads" title="1.5k" percentage="4%" />
        </div>
        <div>
          <AreaInstalledChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
