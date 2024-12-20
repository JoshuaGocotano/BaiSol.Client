import { RiArrowRightWideFill } from "react-icons/ri";
import { getSalesReport } from "../../lib/API/Project/PaymentAPI";
import Loader from "../../main/components/Loader";
import SalesReportChart from "../components/report/SalesReportChart";

const SalesReportPage = () => {
  // const SalesSampleData = [
  //   // 2023
  //   { date: "01-02-2023", amount: 47000 },
  //   { date: "01-09-2023", amount: 52000 },
  //   { date: "01-16-2023", amount: 51000 },
  //   { date: "01-23-2023", amount: 48000 },
  //   { date: "01-30-2023", amount: 49500 }, // last week of january 2023
  //   { date: "02-01-2023", amount: 10500 }, // first day of feb 2023
  //   { date: "02-06-2023", amount: 51500 },
  //   { date: "02-13-2023", amount: 50000 },
  //   { date: "02-20-2023", amount: 50500 },
  //   { date: "02-27-2023", amount: 54500 },
  //   { date: "03-06-2023", amount: 49000 },
  //   { date: "03-13-2023", amount: 51500 },
  //   { date: "03-20-2023", amount: 50000 },
  //   { date: "03-27-2023", amount: 49500 },
  //   { date: "04-03-2023", amount: 51000 },
  //   { date: "04-10-2023", amount: 48000 },
  //   { date: "04-17-2023", amount: 50000 },
  //   { date: "04-24-2023", amount: 52500 },
  //   { date: "05-01-2023", amount: 50500 },
  //   { date: "05-08-2023", amount: 49500 },
  //   { date: "05-15-2023", amount: 51000 },
  //   { date: "05-22-2023", amount: 48000 },
  //   { date: "05-29-2023", amount: 53000 },
  //   { date: "06-05-2023", amount: 50000 },
  //   { date: "06-12-2023", amount: 52000 },
  //   { date: "06-19-2023", amount: 49000 },
  //   { date: "06-26-2023", amount: 50500 },
  //   { date: "07-03-2023", amount: 51000 },
  //   { date: "07-10-2023", amount: 49500 },
  //   { date: "07-17-2023", amount: 51500 },
  //   { date: "07-24-2023", amount: 50000 },
  //   { date: "07-31-2023", amount: 49000 },
  //   { date: "08-07-2023", amount: 53000 },
  //   { date: "08-14-2023", amount: 50500 },
  //   { date: "08-21-2023", amount: 51500 },
  //   { date: "08-28-2023", amount: 50000 },
  //   { date: "09-04-2023", amount: 49500 },
  //   { date: "09-11-2023", amount: 48000 },
  //   { date: "09-18-2023", amount: 51000 },
  //   { date: "09-25-2023", amount: 50000 },
  //   { date: "10-02-2023", amount: 53000 },
  //   { date: "10-09-2023", amount: 52000 },
  //   { date: "10-16-2023", amount: 41000 },
  //   { date: "10-23-2023", amount: 50500 },
  //   { date: "10-30-2023", amount: 49500 },
  //   { date: "11-06-2023", amount: 51500 },
  //   { date: "11-13-2023", amount: 50000 },
  //   { date: "11-20-2023", amount: 51000 },
  //   { date: "11-27-2023", amount: 48000 },
  //   { date: "12-04-2023", amount: 53000 },
  //   { date: "12-11-2023", amount: 49000 },
  //   { date: "12-18-2023", amount: 48500 },
  //   { date: "12-25-2023", amount: 51000 },

  //   // 2024
  //   { date: "01-01-2024", amount: 50000 },
  //   { date: "01-08-2024", amount: 30000 },
  //   { date: "01-09-2024", amount: 12000 },
  //   { date: "01-15-2024", amount: 54500 },
  //   { date: "01-22-2024", amount: 49000 },
  //   { date: "01-29-2024", amount: 51000 },
  //   { date: "02-05-2024", amount: 52500 },
  //   { date: "02-12-2024", amount: 50000 },
  //   { date: "02-19-2024", amount: 51000 },
  //   { date: "02-26-2024", amount: 49500 },
  //   { date: "03-04-2024", amount: 50500 },
  //   { date: "03-11-2024", amount: 51500 },
  //   { date: "03-18-2024", amount: 50000 },
  //   { date: "03-25-2024", amount: 48000 },
  //   { date: "04-01-2024", amount: 52000 },
  //   { date: "04-08-2024", amount: 49500 },
  //   { date: "04-15-2024", amount: 51000 },
  //   { date: "04-22-2024", amount: 50000 },
  //   { date: "04-29-2024", amount: 53000 },
  //   { date: "05-06-2024", amount: 49000 },
  //   { date: "05-13-2024", amount: 51000 },
  //   { date: "05-20-2024", amount: 50000 },
  //   { date: "05-27-2024", amount: 52500 },
  //   { date: "06-03-2024", amount: 50500 },
  //   { date: "06-10-2024", amount: 50000 },
  //   { date: "06-17-2024", amount: 51500 },
  //   { date: "06-24-2024", amount: 49500 },
  //   { date: "07-01-2024", amount: 53000 },
  //   { date: "07-08-2024", amount: 50000 },
  //   { date: "07-15-2024", amount: 52000 },
  //   { date: "07-22-2024", amount: 48000 },
  //   { date: "07-29-2024", amount: 51000 },
  //   { date: "08-05-2024", amount: 50000 },
  //   { date: "08-12-2024", amount: 53000 },
  //   { date: "08-19-2024", amount: 49500 },
  //   { date: "08-26-2024", amount: 51500 },
  //   { date: "09-02-2024", amount: 51000 },
  //   { date: "09-09-2024", amount: 50000 },
  //   { date: "09-16-2024", amount: 52500 },
  //   { date: "09-23-2024", amount: 50500 },
  //   { date: "09-30-2024", amount: 51000 },
  //   { date: "10-07-2024", amount: 49500 },
  //   { date: "10-14-2024", amount: 50000 },
  //   { date: "10-21-2024", amount: 53000 }, // data for last week
  //   { date: "10-28-2024", amount: 50000 }, // data for this week
  //   { date: "11-04-2024", amount: 52000 },
  //   { date: "11-11-2024", amount: 48000 },
  //   { date: "11-18-2024", amount: 49000 },
  //   { date: "11-25-2024", amount: 50500 },
  //   { date: "12-02-2024", amount: 50000 },
  //   { date: "12-09-2024", amount: 51500 },
  //   { date: "12-16-2024", amount: 49500 },
  //   { date: "12-23-2024", amount: 47000 },
  //   { date: "12-24-2024", amount: 11000 },
  // ].map((data) => ({
  //   ...data,
  //   profit: data.amount * 0.3, // Calculate 30% profit
  // }));

  const { data: salesData, isLoading } = getSalesReport();

  if (isLoading) return <Loader label="Loading sales..." />;
  return (
    <main className="flex flex-col">
      <h1 className="flex items-center mb-4">
        Report
        <span className="mx-2 text-gray-400">
          <RiArrowRightWideFill />
        </span>
        Sales
      </h1>
      <div className="grid w-full">
        <div className="flex flex-col justify-between border p-6 border-gray-300 bg-white shadow-lg rounded-md h-[400px] transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Total Sales
          </h3>
          <SalesReportChart salesData={salesData ?? []} />
        </div>
      </div>
    </main>
  );
};

export default SalesReportPage;
