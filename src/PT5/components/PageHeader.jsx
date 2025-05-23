export default function PageHeader({ title = "Dashboard", breadcrumb = "Home", children }) {
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
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">{title}</span>
                {renderBreadcrumb()}
            </div>
            {children && <div id="action-button">{children}</div>}
        </div>
    );
}
