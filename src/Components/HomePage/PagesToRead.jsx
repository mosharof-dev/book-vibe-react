import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BookContext } from '../Context/BookProvider';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

// Custom Triangle Shape draw korar function
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Number (Pages)  component
const CustomLabel = (props) => {
    const { x, y, width, value, fill } = props;
    return (
        <text x={x + width / 2} y={y - 10} fill={fill} textAnchor="middle" fontWeight="bold">
            {value}
        </text>
    );
};

const PagesToRead = () => {
  // 1. Context 
  const { readList } = useContext(BookContext);

  // 2. Data Map 
  const chartData = readList.map(book => ({
      name: book.bookName,     
      pages: book.totalPages
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 md:px8 py-8 h-125 bg-[#f8f8f8] p-10 rounded-2xl mt-10">
      
      {chartData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
              <h2 className="text-2xl font-bold text-gray-400">No books read yet to show chart! 📊</h2>
          </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          {/* 4. data props  */}
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: '#6b7280' }} tickLine={false} axisLine={false} />
            
            <Bar 
              dataKey="pages" 
              fill="#8884d8" 
              shape={<TriangleBar />} 
              label={<CustomLabel />}
            >
              {/* Dynamic Color Looping */}
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PagesToRead;