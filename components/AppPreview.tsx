import React from 'react';
import { Icons } from './Icons';

export const AppPreview: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[124px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col relative">
        {/* Header */}
        <div className="bg-brand-50 pt-8 pb-4 px-4 flex justify-between items-center">
          <span className="font-bold text-gray-800">头型检测</span>
          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
             <Icons.Brain className="w-4 h-4 text-brand-600" />
          </div>
        </div>

        {/* Mock Analysis UI */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden border-2 border-brand-200">
             <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80" 
                alt="Baby Head Scan" 
                className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-dashed border-brand-500 rounded-full animate-pulse flex items-center justify-center relative">
                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-500 shadow-[0_0_10px_rgba(255,36,66,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                    
                    <div className="bg-brand-500/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
                        正在分析 CVAI...
                    </div>
                </div>
             </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-50">
             <div className="flex justify-between items-center mb-2">
               <span className="text-sm text-gray-500">偏头指数 (CVAI)</span>
               <span className="text-lg font-bold text-green-500">3.2 (正常)</span>
             </div>
             <div className="w-full bg-gray-100 rounded-full h-2">
               <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
             </div>
             <div className="mt-4 flex gap-2">
                <div className="flex-1 bg-brand-50 rounded-lg p-2 text-center">
                    <p className="text-xs text-gray-500">扁头比</p>
                    <p className="font-semibold text-brand-700">85%</p>
                </div>
                <div className="flex-1 bg-brand-50 rounded-lg p-2 text-center">
                    <p className="text-xs text-gray-500">对称性</p>
                    <p className="font-semibold text-brand-700">优</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="bg-white border-t p-4 flex justify-around">
            <div className="text-brand-600 flex flex-col items-center">
                <Icons.Camera className="w-6 h-6" />
            </div>
            <div className="text-gray-400 flex flex-col items-center">
                <Icons.Activity className="w-6 h-6" />
            </div>
            <div className="text-gray-400 flex flex-col items-center">
                <Icons.Menu className="w-6 h-6" />
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};