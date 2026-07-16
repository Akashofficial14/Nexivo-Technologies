import React, { useState, useEffect } from "react";
import { Lock, LogOut, Search, Filter, Download, Trash2, Calendar, FileText, Sparkles, CheckCircle2 } from "lucide-react";

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Registration data hooks
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("All");

  // Check session storage on mount
  useEffect(() => {
    const isAuth = sessionStorage.getItem("nexivo_admin_session") === "active";
    if (isAuth) {
      setIsAuthenticated(true);
      loadRecords();
    }
  }, []);

  const loadRecords = () => {
    const data = JSON.parse(localStorage.getItem("nexivo_registrations") || "[]");
    // Sort descending by timestamp
    data.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    setRecords(data);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (passcode === "nexivo2026") {
      sessionStorage.setItem("nexivo_admin_session", "active");
      setIsAuthenticated(true);
      setErrorMsg("");
      loadRecords();
    } else {
      setErrorMsg("Incorrect passcode. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("nexivo_admin_session");
    setIsAuthenticated(false);
    setPasscode("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this submission record?")) {
      const updated = records.filter(r => r.id !== id);
      localStorage.setItem("nexivo_registrations", JSON.stringify(updated));
      setRecords(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm("WARNING: This will permanently delete ALL registration records. Do you want to proceed?")) {
      localStorage.removeItem("nexivo_registrations");
      setRecords([]);
    }
  };

  const exportToCSV = () => {
    if (records.length === 0) {
      alert("No registration records found to export.");
      return;
    }
    const headers = ["ID", "Submission Date", "Full Name", "Company Name", "Email", "Phone", "Service", "Budget", "Project Description"];
    const csvRows = [headers.join(",")];

    for (const r of records) {
      const values = [
        r.id,
        r.date,
        `"${(r.fullName || "").replace(/"/g, '""')}"`,
        `"${(r.companyName || "").replace(/"/g, '""')}"`,
        `"${(r.email || "")}"`,
        `"${(r.phone || "")}"`,
        `"${(r.service || "").replace(/"/g, '""')}"`,
        `"${(r.budget || "")}"`,
        `"${(r.description || "").replace(/"/g, '""')}"`
      ];
      csvRows.push(values.join(","));
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `nexivo_registered_users_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter logic
  const filteredRecords = records.filter(r => {
    const matchesSearch = 
      (r.fullName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.companyName || "").toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = serviceFilter === "All" || (r.service || "") === serviceFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Calculate metrics
  const totalSubmissions = records.length;
  const techInterests = records.filter(r => (r.service || "").includes("Technology")).length;
  const ecomInterests = records.filter(r => (r.service || "").includes("E-Commerce")).length;
  const designInterests = records.filter(r => (r.service || "").includes("Design") || (r.service || "").includes("Creative")).length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-warm-bg flex items-center justify-center p-6 text-left pt-24 pb-20">
        <div className="w-full max-w-md bg-surface border border-border-muted p-8 md:p-10 rounded-2xl shadow-lg space-y-8">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-botanical-green/10 text-botanical-green rounded-full flex items-center justify-center mx-auto border border-botanical-green/20">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-ink-black">Admin Access Lock</h2>
            <p className="font-body text-secondary text-sm">
              Please enter your passcode to view registered user submissions.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="passcode" className="block text-xs font-bold font-headline text-secondary uppercase tracking-wider">
                Admin Passcode
              </label>
              <input
                required
                type="password"
                id="passcode"
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-border-muted rounded focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none transition-all font-body text-sm text-ink-black"
              />
              {errorMsg && (
                <p className="text-red-500 text-xs font-semibold mt-1 tracking-wide font-headline">
                  {errorMsg}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-botanical-green text-surface py-3.5 font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm font-headline"
            >
              Verify & Enter Portal →
            </button>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg pt-32 pb-24 text-left font-body">
      <div className="max-w-container-max mx-auto px-mobile-margin space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-surface border border-border-muted p-8 rounded-2xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-botanical-green/5 border border-botanical-green/10 rounded-full text-botanical-green font-headline text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              SYSTEM PORTAL
            </div>
            <h1 className="font-headline text-3xl font-extrabold text-ink-black">
              Nexivo Registrations
            </h1>
            <p className="text-secondary text-sm">
              Monitor project inquiries and client submissions submitted across all contact flows.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start md:self-center border border-border-muted hover:border-red-200 text-secondary hover:text-red-500 px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer bg-transparent"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {/* Metrics Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-surface border border-border-muted p-6 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-secondary text-xs uppercase tracking-wider font-headline font-bold">Total Inquiries</span>
              <p className="text-3xl font-bold text-ink-black font-headline">{totalSubmissions}</p>
            </div>
            <div className="w-12 h-12 bg-botanical-green/10 text-botanical-green rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-surface border border-border-muted p-6 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-secondary text-xs uppercase tracking-wider font-headline font-bold">Technology & SaaS</span>
              <p className="text-3xl font-bold text-ink-black font-headline">{techInterests}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-surface border border-border-muted p-6 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-secondary text-xs uppercase tracking-wider font-headline font-bold">E-Commerce</span>
              <p className="text-3xl font-bold text-ink-black font-headline">{ecomInterests}</p>
            </div>
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-surface border border-border-muted p-6 rounded-xl flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-secondary text-xs uppercase tracking-wider font-headline font-bold">Graphic & Creative</span>
              <p className="text-3xl font-bold text-ink-black font-headline">{designInterests}</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Database List Block */}
        <div className="bg-surface border border-border-muted rounded-2xl overflow-hidden shadow-sm">
          
          {/* Filters Banner */}
          <div className="p-6 border-b border-border-muted flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:max-w-2xl">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input
                  type="text"
                  placeholder="Search by name, company, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border-muted rounded-lg focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none text-sm transition-all font-body"
                />
              </div>

              {/* Service Filter */}
              <div className="relative">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 bg-surface border border-border-muted rounded-lg focus:ring-1 focus:ring-botanical-green focus:border-botanical-green outline-none text-sm transition-all font-body cursor-pointer appearance-none"
                >
                  <option value="All">All Services</option>
                  <option value="Technology & Software Development">Technology & Software</option>
                  <option value="E-Commerce Services">E-Commerce Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Design & Creative">Graphic Design & Creative</option>
                  <option value="Video Editing & Production">Video Editing & Production</option>
                  <option value="Consulting / Other">Consulting / Other</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {records.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2.5 rounded-lg border border-red-200 hover:bg-red-500 hover:text-white text-red-500 font-semibold text-xs transition-all cursor-pointer bg-transparent"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={exportToCSV}
                className="bg-botanical-green text-surface hover:opacity-95 px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Export CSV
              </button>
            </div>

          </div>

          {/* Table View */}
          <div className="overflow-x-auto">
            {filteredRecords.length === 0 ? (
              <div className="p-16 text-center space-y-3">
                <FileText className="w-12 h-12 text-secondary/40 mx-auto" />
                <h3 className="font-headline text-lg font-bold text-ink-black">No submissions found</h3>
                <p className="text-secondary text-sm max-w-sm mx-auto">
                  {records.length === 0 
                    ? "New registrations submitted via contact flows will populate here dynamically." 
                    : "No records match your search criteria or service filter."}
                </p>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-border-muted font-headline text-[10px] font-bold text-secondary uppercase tracking-wider">
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6">Inquirer</th>
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">Contact Info</th>
                    <th className="py-4 px-6">Service & Budget</th>
                    <th className="py-4 px-6">Project details</th>
                    <th className="py-4 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-muted text-sm font-body text-ink-black">
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="py-5 px-6 whitespace-nowrap align-top text-xs text-secondary font-medium">
                        {record.date}
                      </td>
                      <td className="py-5 px-6 align-top font-semibold whitespace-nowrap">
                        {record.fullName}
                      </td>
                      <td className="py-5 px-6 align-top whitespace-nowrap">
                        {record.companyName}
                      </td>
                      <td className="py-5 px-6 align-top space-y-1">
                        <span className="block font-medium">{record.email}</span>
                        {record.phone && record.phone !== "N/A" && (
                          <span className="block text-xs text-secondary">{record.phone}</span>
                        )}
                      </td>
                      <td className="py-5 px-6 align-top space-y-1">
                        <span className="inline-block bg-botanical-green/10 text-botanical-green text-[10px] font-bold px-2.5 py-1 rounded">
                          {record.service}
                        </span>
                        <span className="block text-xs text-secondary font-medium">
                          Budget: {record.budget}
                        </span>
                      </td>
                      <td className="py-5 px-6 align-top max-w-xs">
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
                          {record.description}
                        </p>
                      </td>
                      <td className="py-5 px-6 align-top text-center">
                        <button
                          onClick={() => handleDelete(record.id)}
                          className="text-secondary hover:text-red-500 hover:bg-red-50 p-2 rounded transition-all cursor-pointer bg-transparent border-none"
                          title="Delete submission record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminPortal;
