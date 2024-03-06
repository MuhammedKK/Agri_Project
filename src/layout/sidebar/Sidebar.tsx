const Sidebar = () => {
  return (
    <div className="shadow-lg text-white h-screen w-2/12">
      <div className="py-4 px-6">
        <a href="#recently">Recently</a>
        <ul className="ml-4">
          <li>
            <a href="#dashboard/subsection1">Overview</a>
          </li>
          <li>
            <a href="#dashboard/subsection2">Fields</a>
          </li>
        </ul>
      </div>
      <div className="py-4 px-6">
        <a href="#dashboard">Dashboard</a>
        <ul className="ml-4">
          <li>
            <a href="#dashboard/subsection1">Dashboard</a>
          </li>
          <li>
            <a href="#dashboard/subsection2">Users</a>
            <ul className="ml-4">
              <li>
                <a href="#dashboard/subsection1">Actions</a>
              </li>
              <li>
                <a href="#dashboard/subsection2">Subscriptions</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-4 px-6">
        <a href="#users">Fields</a>
      </div>
      <div className="py-4 px-6">
        <a href="#users">Services</a>
      </div>
      <div className="py-4 px-6">
        <a href="#users">Finance</a>
      </div>
    </div>
  );
};

export default Sidebar;
