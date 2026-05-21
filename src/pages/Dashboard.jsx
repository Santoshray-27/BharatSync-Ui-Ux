import { TrendingUp, TrendingDown, Activity, Users, FileCheck, Bell, ArrowUpRight, Search } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts'
import { STATS, CHART_DATA } from '../data/config.js'

export default function Dashboard() {
  return (
    <section className="container-x py-12 space-y-6">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
        <div>
          <p className="eyebrow mb-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-leaf mr-1 align-middle animate-pulse" /> Live</p>
          <h1 className="h-huge">Namaste, <em className="italic text-saffron">Officer.</em></h1>
          <p className="text-ash mt-2">Here's what's happening across Bharat — right now.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost text-sm"><Search className="w-4 h-4" /> Search</button>
          <button className="btn-primary text-sm"><Bell className="w-4 h-4" /> 4 alerts</button>
        </div>
      </div>

      {/* stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => {
          const up = s.trend.startsWith('+')
          const TrendIcon = up ? TrendingUp : TrendingDown
          return (
            <div key={i} className="card card-hover">
              <p className="text-sm text-ash">{s.label}</p>
              <p className="display-serif text-5xl mt-2">{s.value}</p>
              <p className={`mt-3 text-xs flex items-center gap-1 font-medium ${up ? 'text-leaf' : 'text-saffron'}`}>
                <TrendIcon className="w-3.5 h-3.5" /> {s.trend} vs last month
              </p>
            </div>
          )
        })}
      </div>

      {/* charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="display-serif text-2xl">Citizen Engagement</h3>
              <p className="text-sm text-ash">Last 6 months · across India</p>
            </div>
            <span className="chip"><Users className="w-3 h-3" /> Live</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
                <XAxis dataKey="month" stroke="#5B616E" fontSize={12} />
                <YAxis stroke="#5B616E" fontSize={12} />
                <Tooltip contentStyle={{ background:'#0E1116', color:'#FAF7F2', border:'none', borderRadius:12, fontSize:12 }} />
                <Line type="monotone" dataKey="citizens" stroke="#FF7A1A" strokeWidth={3} dot={{r:4, fill:'#FF7A1A'}} />
                <Line type="monotone" dataKey="requests" stroke="#1B3FA0" strokeWidth={3} dot={{r:4, fill:'#1B3FA0'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="display-serif text-2xl">Resolved</h3>
              <p className="text-sm text-ash">Weekly throughput</p>
            </div>
            <span className="chip"><FileCheck className="w-3 h-3" /></span>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
                <XAxis dataKey="month" stroke="#5B616E" fontSize={12} />
                <YAxis stroke="#5B616E" fontSize={12} />
                <Tooltip contentStyle={{ background:'#0E1116', color:'#FAF7F2', border:'none', borderRadius:12, fontSize:12 }} />
                <Bar dataKey="requests" fill="#0F8A3C" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* recent activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <h3 className="display-serif text-2xl">Recent Activity</h3>
          <a href="#" className="text-sm link-u inline-flex items-center gap-1">View all <ArrowUpRight className="w-3 h-3" /></a>
        </div>
        <ul className="divide-y divide-line">
          {[
            ['New PM-KISAN application processed', '2 min ago', 'bg-leafL text-leaf'],
            ['AI flagged 14 duplicate Aadhaar requests',  '14 min ago','bg-saffronL text-saffron'],
            ['Grievance routed to Ministry of Health', '1 hr ago', 'bg-ashokaL text-ashoka'],
            ['Scheme eligibility report generated',     '3 hr ago', 'bg-leafL text-leaf']
          ].map(([t, time, color], i) => (
            <li key={i} className="py-4 flex items-center justify-between text-sm">
              <span className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center ${color}`}>
                  <Activity className="w-3.5 h-3.5" />
                </span>
                {t}
              </span>
              <span className="text-ash text-xs">{time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
