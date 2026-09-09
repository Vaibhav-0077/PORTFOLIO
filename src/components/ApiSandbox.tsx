import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal, RefreshCw, Activity } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../utils/constants';

interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  name: string;
  description: string;
  requestPayload?: Record<string, any>;
  responsePayload: (timestamp: string) => Record<string, any>;
  headers: Record<string, string>;
  sizeKb: number;
}

const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'developer',
    method: 'GET',
    path: '/api/v1/developer',
    name: 'Profile & Bio',
    description: 'Fetch real-time developer status, background, and core capabilities.',
    responsePayload: (timestamp) => ({
      status: 'success',
      timestamp,
      developer: {
        name: PERSONAL_INFO.name,
        role: PERSONAL_INFO.title,
        location: PERSONAL_INFO.location,
        availability: 'Open for Full-Time & High-Impact Contracts',
        education: 'B.Sc. Information Technology (2025)',
        specialization: 'MERN Stack & Scalable Cloud Backends',
        core_stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'TypeScript', 'Tailwind CSS'],
        social: {
          github: 'https://github.com/Vaibhav-0077',
          linkedin: 'https://www.linkedin.com/in/vaibhav-guigade-07v',
        },
      },
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Powered-By': 'Express / Node.js V8 Engine',
      'Cache-Control': 'public, max-age=3600, s-maxage=7200',
      'X-RateLimit-Limit': '120',
      'X-RateLimit-Remaining': '118',
    },
    sizeKb: 1.2,
  },
  {
    id: 'projects',
    method: 'GET',
    path: '/api/v1/projects?featured=true',
    name: 'Project Catalog',
    description: 'Query production-ready full-stack applications and live repositories.',
    responsePayload: (timestamp) => ({
      status: 'success',
      timestamp,
      total_count: PROJECTS.length,
      data: PROJECTS.map((p) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        stack: p.tech,
        live_demo: p.liveUrl,
        repository: p.githubUrl,
      })),
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Powered-By': 'Express.js',
      'Access-Control-Allow-Origin': '*',
      'ETag': 'W/"7b-2k4lM8vX901"',
    },
    sizeKb: 2.4,
  },
  {
    id: 'health',
    method: 'GET',
    path: '/api/v1/health',
    name: 'Server Health',
    description: 'Inspect cluster status, database ping, and server telemetry.',
    responsePayload: (timestamp) => ({
      status: 'healthy',
      timestamp,
      environment: 'production',
      uptime_seconds: 849204,
      services: {
        database: {
          driver: 'MongoDB Mongoose ODM',
          status: 'connected',
          latency_ms: 8,
        },
        cloud_storage: {
          provider: 'Cloudinary CDN',
          status: 'operational',
        },
        mail_gateway: {
          protocol: 'SMTP / Web3Forms REST',
          status: 'ready',
        },
      },
      system: {
        node_version: 'v20.18.0',
        memory_usage_mb: 46.8,
        active_connections: 12,
      },
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
    },
    sizeKb: 0.9,
  },
  {
    id: 'ping',
    method: 'POST',
    path: '/api/v1/contact/ping',
    name: 'Dispatch Ping',
    description: 'Simulate sending a payload to the backend dispatch pipeline.',
    requestPayload: {
      client: 'Visitor Console',
      purpose: 'Portfolio Exploration & Opportunity Inquiry',
      urgent: false,
    },
    responsePayload: (timestamp) => ({
      status: 'created',
      code: 201,
      timestamp,
      message: 'Ping acknowledged. Vaibhav has received your telemetry pulse.',
      receipt_id: 'ack_' + Math.random().toString(36).substring(2, 10),
      rate_limit_remaining: 59,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Location': '/api/v1/contact/ping/status',
      'X-RateLimit-Limit': '60',
      'X-RateLimit-Remaining': '59',
    },
    sizeKb: 0.7,
  },
];

export const ApiSandbox: React.FC = () => {
  const [activeEndpointId, setActiveEndpointId] = useState('developer');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'body' | 'headers'>('body');
  const [latency, setLatency] = useState(24);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  const currentEndpoint = API_ENDPOINTS.find((e) => e.id === activeEndpointId) || API_ENDPOINTS[0];

  const triggerRequest = () => {
    setIsLoading(true);
    const simulatedLatency = Math.floor(Math.random() * 18) + 16; // 16ms - 34ms
    setLatency(simulatedLatency);
    setTimestamp(new Date().toISOString());

    setTimeout(() => {
      setIsLoading(false);
    }, 220);
  };

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(currentEndpoint.responsePayload(timestamp), null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyCurl = () => {
    const curlCommand = currentEndpoint.method === 'GET'
      ? `curl -X GET "https://api.vaibhav.dev${currentEndpoint.path}" -H "Accept: application/json"`
      : `curl -X POST "https://api.vaibhav.dev${currentEndpoint.path}" -H "Content-Type: application/json" -d '${JSON.stringify(currentEndpoint.requestPayload)}'`;
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  useEffect(() => {
    triggerRequest();
  }, [activeEndpointId]);

  return (
    <div className="w-full mt-14 rounded-2xl border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#0B0D13] shadow-xl overflow-hidden transition-all">
      {/* Header Bar */}
      <div className="px-5 py-4 bg-elevated-light/80 dark:bg-[#10131B] border-b border-border-light dark:border-[#1E222D] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1" />
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-brand" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-primary-light dark:text-text-primary-dark">
              Interactive REST API Sandbox
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCurl}
            className="px-3 py-1.5 rounded-lg text-xs font-mono border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#161922] text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-brand/40 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Copy as cURL command"
          >
            {copiedCurl ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCurl ? 'cURL Copied!' : 'Copy cURL'}</span>
          </button>

          <button
            onClick={handleCopyJson}
            className="px-3 py-1.5 rounded-lg text-xs font-mono border border-border-light dark:border-[#222634] bg-surface-light dark:bg-[#161922] text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-accent-brand/40 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Copy JSON response"
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode ? 'JSON Copied' : 'Copy JSON'}</span>
          </button>
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="px-5 py-3 bg-elevated-light/40 dark:bg-[#0E1017] border-b border-border-light dark:border-[#1E222D] flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-mono text-text-secondary-light/70 dark:text-text-secondary-dark/60 uppercase tracking-wider pr-2 hidden sm:inline-block">
          Endpoints:
        </span>
        {API_ENDPOINTS.map((endpoint) => {
          const isActive = activeEndpointId === endpoint.id;
          return (
            <button
              key={endpoint.id}
              onClick={() => setActiveEndpointId(endpoint.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-accent-brand/10 dark:bg-accent-brand/20 text-accent-brand border border-accent-brand/30 shadow-sm'
                  : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
              }`}
            >
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  endpoint.method === 'GET'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                }`}
              >
                {endpoint.method}
              </span>
              <span>{endpoint.name}</span>
            </button>
          );
        })}
      </div>

      {/* URL Request Bar */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-surface-light dark:bg-[#0C0E14] border-b border-border-light dark:border-[#1E222D]">
        <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-border-light dark:border-[#222634] bg-elevated-light dark:bg-[#12151E]">
          <span
            className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
              currentEndpoint.method === 'GET'
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
            }`}
          >
            {currentEndpoint.method}
          </span>
          <span className="text-xs font-mono text-text-secondary-light dark:text-text-secondary-dark/60 select-none hidden xs:inline">
            https://api.vaibhav.dev
          </span>
          <span className="text-xs font-mono font-semibold text-text-primary-light dark:text-text-primary-dark truncate">
            {currentEndpoint.path}
          </span>
        </div>

        <button
          onClick={triggerRequest}
          disabled={isLoading}
          className="px-5 py-2.5 rounded-xl bg-accent-brand hover:bg-accent-brand-light text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-accent-brand/10 hover:shadow-lg hover:shadow-accent-brand/20 disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Executing...' : 'Send Request'}</span>
        </button>
      </div>

      {/* Telemetry / Status Bar */}
      <div className="px-5 py-2.5 bg-elevated-light/60 dark:bg-[#0E1017] border-b border-border-light dark:border-[#1E222D] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-text-secondary-light dark:text-text-secondary-dark/70">Status:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
              {currentEndpoint.method === 'POST' ? '201 Created' : '200 OK'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-text-secondary-light dark:text-text-secondary-dark/70">Latency:</span>
            <span className="text-accent-brand font-bold">{latency}ms</span>
          </div>

          <div className="flex items-center gap-1.5 hidden sm:flex">
            <span className="text-text-secondary-light dark:text-text-secondary-dark/70">Size:</span>
            <span className="text-text-primary-light dark:text-text-primary-dark font-medium">
              {currentEndpoint.sizeKb} KB
            </span>
          </div>
        </div>

        {/* Response Format Tab Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/5 dark:bg-[#161922] border border-border-light dark:border-[#222634]">
          <button
            onClick={() => setActiveTab('body')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'body'
                ? 'bg-surface-light dark:bg-[#0B0D13] text-text-primary-light dark:text-text-primary-dark shadow-sm'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light'
            }`}
          >
            Response Body
          </button>
          <button
            onClick={() => setActiveTab('headers')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'headers'
                ? 'bg-surface-light dark:bg-[#0B0D13] text-text-primary-light dark:text-text-primary-dark shadow-sm'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light'
            }`}
          >
            Headers
          </button>
        </div>
      </div>

      {/* JSON / Headers Display Window */}
      <div className="p-5 bg-surface-light dark:bg-[#08090E] min-h-[260px] max-h-[380px] overflow-y-auto text-xs font-mono leading-relaxed select-text">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-48 flex flex-col items-center justify-center gap-3 text-text-secondary-light dark:text-text-secondary-dark"
            >
              <RefreshCw className="w-5 h-5 text-accent-brand animate-spin" />
              <span className="text-xs font-mono">Resolving route & serializing payload...</span>
            </motion.div>
          ) : activeTab === 'body' ? (
            <motion.div
              key="body"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <pre className="text-text-primary-light dark:text-[#E2E8F0] overflow-x-auto">
                <code>
                  {JSON.stringify(currentEndpoint.responsePayload(timestamp), null, 2)
                    .split('\n')
                    .map((line, idx) => (
                      <div key={idx} className="hover:bg-black/5 dark:hover:bg-white/[0.03] px-2 rounded flex">
                        <span className="text-text-secondary-light/40 dark:text-text-secondary-dark/30 select-none mr-4 inline-block w-6 text-right shrink-0">
                          {idx + 1}
                        </span>
                        <span>{line}</span>
                      </div>
                    ))}
                </code>
              </pre>
            </motion.div>
          ) : (
            <motion.div
              key="headers"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="space-y-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-text-secondary-light/70 dark:text-text-secondary-dark/60 pb-2 border-b border-border-light dark:border-[#1E222D]">
                <div className="md:col-span-4 font-bold">Header Key</div>
                <div className="md:col-span-8 font-bold">Value</div>
              </div>
              {Object.entries(currentEndpoint.headers).map(([key, val]) => (
                <div key={key} className="grid grid-cols-1 md:grid-cols-12 gap-2 py-1 hover:bg-black/5 dark:hover:bg-white/[0.03] px-2 rounded">
                  <div className="md:col-span-4 text-accent-brand font-semibold">{key}</div>
                  <div className="md:col-span-8 text-text-primary-light dark:text-slate-300 break-all">{val}</div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 bg-elevated-light/40 dark:bg-[#0E1017] border-t border-border-light dark:border-[#1E222D] flex items-center justify-between text-[11px] font-mono text-text-secondary-light dark:text-text-secondary-dark/60">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-500" />
          <span>Simulating Express.js Node runtime router</span>
        </div>
        <span>REST v1.0.0</span>
      </div>
    </div>
  );
};
