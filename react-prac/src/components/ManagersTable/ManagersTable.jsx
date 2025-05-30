"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Upload,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  X,
  Calendar,
  Menu,
} from "lucide-react";

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{children[0]}</div>
      {isOpen && <div onClick={() => setIsOpen(false)}>{children[1]}</div>}
    </div>
  );
};

const DropdownMenuTrigger = ({ asChild, children }) => <div>{children}</div>;
const DropdownMenuContent = ({ align, children }) => (
  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 py-1">
    {children}
  </div>
);
const DropdownMenuItem = ({ className, children, onClick }) => (
  <div
    className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
      className || ""
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">{children}</table>
  </div>
);
const TableHeader = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);
const TableBody = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);
const TableRow = ({ children }) => <tr>{children}</tr>;
const TableHead = ({ className, children }) => (
  <th
    className={`px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
      className || ""
    }`}
  >
    {children}
  </th>
);
const TableCell = ({ className, children }) => (
  <td
    className={`px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
      className || ""
    }`}
  >
    {children}
  </td>
);

const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setIsOpen(!isOpen)}>{children[0]}</div>
      {isOpen && <div onClick={() => setIsOpen(false)}>{children[1]}</div>}
    </div>
  );
};

const SelectTrigger = ({ className, children }) => (
  <div
    className={`border rounded-md px-2 py-1 flex items-center justify-between cursor-pointer ${
      className || ""
    }`}
  >
    {children}
    <ChevronRight className="h-4 w-4 ml-2 transform rotate-90" />
  </div>
);

const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

const SelectContent = ({ children }) => (
  <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
    <div className="py-1">{children}</div>
  </div>
);

const SelectItem = ({ value, onClick, children }) => (
  <div
    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
    onClick={() => onClick && onClick(value)}
  >
    {children}
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function ManagerTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState("5");
  const [displayCount, setDisplayCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    company: "",
    email: "",
    limitOfUsers: 10,
    subscriptionValidTill: null,
  });

  // Initial managers data
  const [managers, setManagers] = useState([
    {
      id: 1,
      avatar:
        "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740",
      name: "John Doe",
      company: "Algoace",
      email: "Johndoe754@hotmail.com",
      usersAdded: 2,
      limitOfUsers: 1000,
      subscriptionValidTill: "2025-12-31",
    },
    {
      id: 2,
      avatar:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
      name: "Jimmi Girhold",
      company: "The travel Service",
      email: "jimmie.girhold@hotmail.com",
      usersAdded: 0,
      limitOfUsers: 30,
      subscriptionValidTill: "2028-01-1",
    },
    {
      id: 3,
      avatar:
        "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
      name: "Jona",
      company: "10 pearls",
      email: "jona.simonis@gmail.com",
      usersAdded: 0,
      limitOfUsers: 50,
      subscriptionValidTill: "2028-03-10",
    },
    {
      id: 4,
      avatar:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg",
      name: "SYED HASSAN AHMED",
      company: "Algoace",
      email: "shassanahmed47@gmail.com",
      usersAdded: 0,
      limitOfUsers: 70,
      subscriptionValidTill: "2028-09-22",
    },
    {
      id: 5,
      avatar:
        "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
      name: "Mirya Corner",
      company: "Future Safe",
      email: "Mayou's343@gmail.com",
      usersAdded: 5,
      limitOfUsers: 40,
      subscriptionValidTill: "2027-05-25",
    },
    {
      id: 6,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkpRcVB4hMuHQo3ZoEu0ySR4ZgHCYIz45QQ&s",
      name: "Jequiline Spenser",
      company: "Spensed",
      email: "jequel.hyllo76@gmail.com",
      usersAdded: 0,
      limitOfUsers: 40,
      subscriptionValidTill: "2027-06-15",
    },
    {
      id: 7,
      avatar:
        "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
      name: "Giana Brandt",
      company: "Technidus",
      email: "giana.bran454@gmail.com",
      usersAdded: 0,
      limitOfUsers: 23,
      subscriptionValidTill: "2026-12-15",
    },
    {
      id: 8,
      avatar:
        "https://thumbs.dreamstime.com/b/%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-male-avatar-realistic-face-man-suit-shirt-necktie-businessman-head-shoulder-icon-vector-186025729.jpg",
      name: "Dexter Shephered",
      company: "Dycoders",
      email: "dexter465@gmail.com",
      usersAdded: 0,
      limitOfUsers: 10,
      subscriptionValidTill: "2028-08-23",
    },
    {
      id: 9,
      avatar:
        "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png",
      name: "Lucia Camieli",
      company: "Camelian",
      email: "lucia865@gmail.com",
      usersAdded: 1,
      limitOfUsers: 25,
      subscriptionValidTill: "2026-03-5",
    },
    {
      id: 10,
      avatar:
        "https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg",
      name: "Serhat Dermas",
      company: "Dharma",
      email: "serhat.x84@gmail.com",
      usersAdded: 2,
      limitOfUsers: 20,
      subscriptionValidTill: "2027-04-10",
    },
  ]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedManagerId, setSelectedManagerId] = useState(null);

  useEffect(() => {
    setDisplayCount(Number.parseInt(rowsPerPage, 10));
    setCurrentPage(1);
  }, [rowsPerPage]);

  const filteredManagers = managers.filter(
    (manager) =>
      manager.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      manager.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      manager.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredManagers.length / displayCount);
  const startIndex = (currentPage - 1) * displayCount;
  const paginatedManagers = filteredManagers.slice(
    startIndex,
    startIndex + displayCount
  );

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedManagers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedManagers.map((m) => m.id));
    }
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddManager = (e) => {
    e.preventDefault();

    // Create new manager
    const newManager = {
      id: managers.length + 1,
      avatar: "/api/placeholder/32/32",
      name: formData.name,
      company: formData.company,
      email: formData.email,
      usersAdded: 0,
      limitOfUsers: Number.parseInt(formData.limitOfUsers, 10),
      subscriptionValidTill:
        formData.subscriptionValidTill || getDefaultSubscriptionDate(),
    };

    // Add to list and close modal
    setManagers([...managers, newManager]);
    setIsModalOpen(false);

    // Reset form
    resetForm();
  };

  const handleEditManager = (e) => {
    e.preventDefault();

    // Update the manager
    setManagers(
      managers.map((manager) =>
        manager.id === formData.id
          ? {
              ...manager,
              name: formData.name,
              company: formData.company,
              email: formData.email,
              limitOfUsers: Number.parseInt(formData.limitOfUsers, 10),
              subscriptionValidTill: formData.subscriptionValidTill,
            }
          : manager
      )
    );

    // Close modal and reset form
    setIsEditModalOpen(false);
    resetForm();
  };

  const handleDeleteManager = (id) => {
    setManagers(managers.filter((manager) => manager.id !== id));
    setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
  };

  const handleEditClick = (manager) => {
    // Set form data with manager's current data
    setFormData({
      id: manager.id,
      name: manager.name,
      company: manager.company,
      email: manager.email,
      limitOfUsers: manager.limitOfUsers,
      subscriptionValidTill: manager.subscriptionValidTill || "",
    });

    // Open edit modal
    setIsEditModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      company: "",
      email: "",
      limitOfUsers: 10,
      subscriptionValidTill: null,
    });
  };

  const getDefaultSubscriptionDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString().split("T")[0];
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No date";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadPicture = (e) => {
    e.preventDefault();

    if (selectedFile && selectedManagerId) {
      // Create a URL for the selected file
      const fileUrl = URL.createObjectURL(selectedFile);

      // Update the manager's avatar with the new image
      setManagers(
        managers.map((manager) =>
          manager.id === selectedManagerId
            ? { ...manager, avatar: fileUrl }
            : manager
        )
      );

      // Reset state and close modal
      setSelectedFile(null);
      setSelectedManagerId(null);
      setIsUploadModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-teal-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 16V8M8 12H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="ml-2 text-gray-700 font-medium">clear minds</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-48 border-r border-gray-200 bg-white`}
      >
        <div className="p-4 border-b hidden md:block">
          <div className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-teal-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 16V8M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="ml-2 text-gray-700 font-medium">clear minds</span>
          </div>
        </div>
        <div className="py-2">
          <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">
            Dashboard
          </div>
          <div className="mt-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Analytics
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-teal-600 bg-teal-50 hover:bg-teal-100"
            >
              Manager
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">Managers</h1>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto"
              >
                <Plus className="h-4 w-4 mr-2 text-teal-500" />
                New Manager
              </button>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center justify-center px-3 py-2 rounded-md text-sm text-white bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={
                        selectedRows.length === paginatedManagers.length &&
                        paginatedManagers.length > 0
                      }
                      onChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-12">Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Company
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Users Added
                  </TableHead>
                  <TableHead className="hidden lg:table-cell">Limit</TableHead>
                  <TableHead className="hidden xl:table-cell">
                    Subscription
                  </TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedManagers.map((manager) => (
                  <TableRow key={manager.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedRows.includes(manager.id)}
                        onChange={() => toggleSelectRow(manager.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <img
                        src={manager.avatar || "/placeholder.svg"}
                        alt="avatar"
                        className="h-8 w-8 rounded-full"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-gray-900">
                        {manager.name}
                      </div>
                      <div className="sm:hidden text-xs text-gray-500">
                        {manager.company}
                      </div>
                      <div className="md:hidden text-xs text-gray-500 truncate max-w-[120px]">
                        {manager.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {manager.company}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {manager.email}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {manager.usersAdded}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {manager.limitOfUsers}
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-teal-500" />
                        <span className="text-xs text-gray-600">
                          {formatDate(manager.subscriptionValidTill)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1 rounded-full hover:bg-gray-100">
                            <MoreVertical className="h-4 w-4 text-gray-500" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleEditClick(manager)}
                          >
                            <Edit2 className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteManager(manager.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="px-4 py-3 flex flex-col sm:flex-row justify-between items-center border-t gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm hidden sm:inline">Rows per page:</span>
                <span className="text-sm sm:hidden">Rows:</span>
                <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
                  <SelectTrigger className="w-16 h-8 text-xs">
                    <SelectValue placeholder={rowsPerPage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5" onClick={() => setRowsPerPage("5")}>
                      5
                    </SelectItem>
                    <SelectItem value="10" onClick={() => setRowsPerPage("10")}>
                      10
                    </SelectItem>
                    <SelectItem value="20" onClick={() => setRowsPerPage("20")}>
                      20
                    </SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-500">
                  {`${startIndex + 1}-${Math.min(
                    startIndex + displayCount,
                    filteredManagers.length
                  )} of ${filteredManagers.length}`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="p-1 rounded-full hover:bg-gray-100"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft
                    className={`h-5 w-5 ${
                      currentPage === 1 ? "text-gray-300" : "text-gray-500"
                    }`}
                  />
                </button>
                <button
                  className="p-1 rounded-full hover:bg-gray-100"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight
                    className={`h-5 w-5 ${
                      currentPage === totalPages
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Manager Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Manager"
      >
        <form onSubmit={handleAddManager}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="limitOfUsers"
                className="block text-sm font-medium text-gray-700"
              >
                User Limit{" "}
              </label>
              <input
                type="number"
                id="limitOfUsers"
                name="limitOfUsers"
                value={formData.limitOfUsers}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                min="1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subscription Valid Till"
                className="block text-sm font-medium text-gray-700"
              >
                Subscription Valid Till
              </label>
              <input
                type="date"
                id="subscriptionValidTill"
                name="subscriptionValidTill"
                value={formData.subscriptionValidTill || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                resetForm();
              }}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-700"
            >
              Add Manager
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Manager Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          resetForm();
        }}
        title="Edit Manager"
      >
        <form onSubmit={handleEditManager}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="edit-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="edit-company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="edit-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="edit-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="edit-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="edit-limitOfUsers"
                className="block text-sm font-medium text-gray-700"
              >
                User Limit
              </label>
              <input
                type="number"
                id="edit-limitOfUsers"
                name="limitOfUsers"
                value={formData.limitOfUsers}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                min="1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="edit-subscriptionValidTill"
                className="block text-sm font-medium text-gray-700"
              >
                Subscription Valid Till{" "}
              </label>
              <input
                type="date"
                id="edit-subscriptionValidTill"
                name="subscriptionValidTill"
                value={formData.subscriptionValidTill || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setIsEditModalOpen(false);
                resetForm();
              }}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Profile Picture"
      >
        <form onSubmit={handleUploadPicture}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="managerId"
                className="block text-sm font-medium text-gray-700"
              >
                Select Manager
              </label>
              <select
                id="managerId"
                name="managerId"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                value={selectedManagerId || ""}
                onChange={(e) => setSelectedManagerId(Number(e.target.value))}
                required
              >
                <option value="">Select a manager</option>
                {managers.map((manager) => (
                  <option key={manager.id} value={manager.id}>
                    {manager.name} - {manager.company}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Picture
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-teal-50 file:text-teal-700
                  hover:file:bg-teal-100"
                required
              />
            </div>
            {selectedFile && (
              <div className="mt-2">
                <p className="text-sm text-gray-500">Preview:</p>
                <img
                  src={URL.createObjectURL(selectedFile) || "/placeholder.svg"}
                  alt="Preview"
                  className="mt-2 h-20 w-20 rounded-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setIsUploadModalOpen(false);
                setSelectedFile(null);
                setSelectedManagerId(null);
              }}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedFile || !selectedManagerId}
              className="bg-teal-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Upload Picture
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
