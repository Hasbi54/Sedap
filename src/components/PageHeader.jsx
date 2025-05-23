export default function PageHeader({
    title = "Dashboard", 
    breadcrumb = "Home", 
    children,
    actionButton = null, // Menambahkan prop actionButton untuk tombol yang disesuaikan
    className = "" // Menambahkan className agar bisa menyesuaikan styling
  }) {
  
    const renderBreadcrumb = () => {
      if (Array.isArray(breadcrumb)) {
        return (
          <div className="flex items-center font-medium space-x-2 mt-2">
            {breadcrumb.map((item, index) => (
              <span key={index} className="text-gray-500">
                {item}
                {index < breadcrumb.length - 1 && <span className="mx-1">/</span>}
              </span>
            ))}
          </div>
        );
      } else {
        return (
          <div className="flex items-center font-medium space-x-2 mt-2">
            <span className="text-gray-500">{breadcrumb}</span>
          </div>
        );
      }
    };
  
    return (
      <div id="pageheader-container" className={`flex items-center justify-between p-4 ${className}`}>
        <div id="pageheader-left" className="flex flex-col">
          <span id="page-title" className="text-3xl font-semibold">{title}</span>
          {renderBreadcrumb()}
        </div>
  
        {/* Action Button */}
        {actionButton && (
          <div id="action-button">{actionButton}</div>
        )}
  
        {/* If children exists, render them (this could be used for custom content) */}
        {children && <div id="additional-content">{children}</div>}
      </div>
    );
  }
  