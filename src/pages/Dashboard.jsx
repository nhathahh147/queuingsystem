import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import UserInfo from '../components/user-info/UserInfo'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="title mb">Biểu đồ cấp số</div>
              <OverallList />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <UserInfo user={data.user} />
        <div className="title mb">Tổng quan</div>
        <div className="mb">
          
          <div className="row">
              {
                data.summary.map((item, index) => (
                  <div key={`summary-${index}`} className="col-12 col-md-6 col-sm-12 mb">
                    <SummaryBox item={item} />
                  </div>
                ))
              }
            </div>
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom'
      }
    }
  }

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
      <div className="title mb">
        RevenueByMonthsChart
      </div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`} />
      </div>
    </>
  )
}