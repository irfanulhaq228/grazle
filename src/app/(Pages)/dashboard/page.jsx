"use client"

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { GoDotFill } from "react-icons/go";

import salesIcon from "@/assets/svgs/dashboard-sales.svg";
import ordersIcon from "@/assets/svgs/dashboard-orders.svg";
import revenueIcon from "@/assets/svgs/dashboard-revenue.svg";
import returnIcon from "@/assets/svgs/dashboard-return.svg";
import dashboardTableImg from "@/assets/svgs/dashboard-table-img.svg";

import productOne from "@/assets/dashboard-product-1.png";
import productTwo from "@/assets/dashboard-product-2.png";
import productThree from "@/assets/dashboard-product-3.png";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


const Dashboard = () => {
  const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Order',
        data: [5300, 5200, 9300, 13500, 5300, 10200, 1200, 7100],
        backgroundColor: '#00A1FF',
        borderRadius: 5
      },
      {
        label: 'Revenue',
        data: [4500, 4000, 9300, 15000, 4000, 11000, 2000, 8000],
        backgroundColor: '#06E775',
        borderRadius: 5
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[22px]">
          {/* boxes */}
          <div className="flex justify-between flex-wrap">
            <div className="w-[260px] h-[152px] rounded-[10px] bg-white shadow-sm flex flex-col justify-between p-[20px]">
              <div className="flex justify-between">
                <p className="text-[15px] font-[500] text-[var(--text-color-body)]">
                  Total Sales
                </p>
                <Image src={salesIcon} />
              </div>
              <div>
                <p className="text-[32px] font-[600] text-black">$ 77.21</p>
                <p className="text-[12px] font-[500] text-[var(--text-color-body-plus)]">
                  + 3.16% From last month
                </p>
              </div>
            </div>
            <div className="w-[260px] h-[152px] rounded-[10px] bg-white shadow-sm flex flex-col justify-between p-[20px]">
              <div className="flex justify-between">
                <p className="text-[15px] font-[500] text-[var(--text-color-body)]">
                  Total Orders
                </p>
                <Image src={ordersIcon} />
              </div>
              <div>
                <p className="text-[32px] font-[600] text-black">$ 2,107</p>
                <p className="text-[12px] font-[500] text-[var(--text-color-body-minus)]">
                  - 1.18% From last month
                </p>
              </div>
            </div>
            <div className="w-[260px] h-[152px] rounded-[10px] bg-white shadow-sm flex flex-col justify-between p-[20px]">
              <div className="flex justify-between">
                <p className="text-[15px] font-[500] text-[var(--text-color-body)]">
                  Lifetime Revenue
                </p>
                <Image src={revenueIcon} />
              </div>
              <div>
                <p className="text-[32px] font-[600] text-black">$ 653</p>
                <p className="text-[12px] font-[500] text-[var(--text-color-body-plus)]">
                  + 2.24% From last month
                </p>
              </div>
            </div>
            <div className="w-[260px] h-[152px] rounded-[10px] bg-white shadow-sm flex flex-col justify-between p-[20px]">
              <div className="flex justify-between">
                <p className="text-[15px] font-[500] text-[var(--text-color-body)]">
                  Return Orders
                </p>
                <Image src={returnIcon} />
              </div>
              <div>
                <p className="text-[32px] font-[600] text-black">$ 2,107</p>
                <p className="text-[12px] font-[500] text-[var(--text-color-body-minus)]">
                  - 1.18% From last month
                </p>
              </div>
            </div>
          </div>
          {/* graphs and products */}
          <div className="mt-[30px] flex gap-5">
            {/* graph */}
            <div className="w-[55%] bg-white shadow-sm rounded-[10px] p-[20px]">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[600]">Revenue Trend</p>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1 text-[15px]">
                    <GoDotFill className="text-[var(--text-color-body-plus)]" />
                    Revenue
                  </div>
                  <div className="flex items-center gap-1 text-[15px]">
                    <GoDotFill className="text-[var(--text-color-body-order)]" />
                    Order
                  </div>
                </div>
              </div>
              <div>
                <Bar
                  data={data}
                  options={options}
                ></Bar>
              </div>
            </div>
            {/* products */}
            <div className="w-[45%] bg-white shadow-sm rounded-[10px] px-[20px] py-[25px] flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[600]">Customer Favorite</p>
                <button className="w-[135px] h-[32px] text-[var(--text-color-body)] rounded-[4px] border-black border-[1px] py-[6px] px-[12px] text-[13px] font-[500]">
                  See All Products
                </button>
              </div>
              <div className="flex gap-5">
                <Image src={productOne} className="w-[67px] h-[67px]" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex flex-col gap-1.5">
                    <p className="font-[500] leading-[24px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-[14px] text-[var(--text-color-body)]">
                      12,429 Sales
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                      <GoDotFill />
                      Available
                    </p>
                    <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                      135 Stocks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <Image src={productTwo} className="w-[67px] h-[67px]" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex flex-col gap-1.5">
                    <p className="font-[500] leading-[24px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-[14px] text-[var(--text-color-body)]">
                      12,429 Sales
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                      <GoDotFill />
                      Available
                    </p>
                    <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                      135 Stocks
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <Image src={productThree} className="w-[67px] h-[67px]" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex flex-col gap-1.5">
                    <p className="font-[500] leading-[24px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-[14px] text-[var(--text-color-body)]">
                      12,429 Sales
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                      <GoDotFill />
                      Available
                    </p>
                    <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                      135 Stocks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="bg-white rounded-[10px] shadow-sm px-[20px] py-[25px] mt-[20px] flex flex-col gap-5">
            {/* table header */}
            <div className="flex mb-1">
              <p className="w-[100px] font-[500] text-[var(--text-color-body)]">
                No
              </p>
              <p className="w-[202px] font-[500] text-[var(--text-color-body)]">
                Product Name
              </p>
              <p className="w-[130px] font-[500] text-[var(--text-color-body)]">
                Price
              </p>
              <p className="w-[170px] font-[500] text-[var(--text-color-body)]">
                Country
              </p>
              <p className="w-[150px] font-[500] text-[var(--text-color-body)]">
                Date
              </p>
              <p className="w-[170px] font-[500] text-[var(--text-color-body)]">
                Payment
              </p>
              <p className="w-[120px] font-[500] text-[var(--text-color-body)]">
                Status
              </p>
            </div>
            {/* table body */}
            <div className="flex">
              <p className="w-[100px] text-[14px]">PK09485</p>
              <p className="w-[202px] text-[14px] flex items-center gap-2">
                <Image src={dashboardTableImg} />
                Electric LED
              </p>
              <p className="w-[130px] text-[14px]">$111.00</p>
              <p className="w-[170px] text-[14px]">United States</p>
              <p className="w-[150px] text-[14px]">12 Jan, 2024</p>
              <p className="w-[170px] text-[14px]">Transfer</p>
              <div className="w-[120px] text-[14px]">
                <p className="text-[var(--text-color-body-plus)] font-[500] text-[10px] bg-green-100 w-[62px] h-[22px] rounded-[4px] flex justify-center items-center">
                  Delivered
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="w-[100px] text-[14px]">PK09485</p>
              <p className="w-[202px] text-[14px] flex items-center gap-2">
                <Image src={dashboardTableImg} />
                Electric LED
              </p>
              <p className="w-[130px] text-[14px]">$111.00</p>
              <p className="w-[170px] text-[14px]">United States</p>
              <p className="w-[150px] text-[14px]">12 Jan, 2024</p>
              <p className="w-[170px] text-[14px]">Credit Card</p>
              <div className="w-[120px] text-[14px]">
                <p className="text-[var(--text-color-body-pending)] font-[500] text-[10px] bg-orange-100 w-[62px] h-[22px] rounded-[4px] flex justify-center items-center">
                  Pending
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="w-[100px] text-[14px]">PK09485</p>
              <p className="w-[202px] text-[14px] flex items-center gap-2">
                <Image src={dashboardTableImg} />
                Electric LED
              </p>
              <p className="w-[130px] text-[14px]">$111.00</p>
              <p className="w-[170px] text-[14px]">United States</p>
              <p className="w-[150px] text-[14px]">12 Jan, 2024</p>
              <p className="w-[170px] text-[14px]">Transfer</p>
              <div className="w-[120px] text-[14px]">
                <p className="text-[var(--text-color-body-plus)] font-[500] text-[10px] bg-green-100 w-[62px] h-[22px] rounded-[4px] flex justify-center items-center">
                  Delivered
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="w-[100px] text-[14px]">PK09485</p>
              <p className="w-[202px] text-[14px] flex items-center gap-2">
                <Image src={dashboardTableImg} />
                Electric LED
              </p>
              <p className="w-[130px] text-[14px]">$111.00</p>
              <p className="w-[170px] text-[14px]">United States</p>
              <p className="w-[150px] text-[14px]">12 Jan, 2024</p>
              <p className="w-[170px] text-[14px]">Credit Card</p>
              <div className="w-[120px] text-[14px]">
                <p className="text-[var(--text-color-body-pending)] font-[500] text-[10px] bg-orange-100 w-[62px] h-[22px] rounded-[4px] flex justify-center items-center">
                  Pending
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;