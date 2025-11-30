import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string; 
}

interface AppBreadcrumbsProps {
  items: Crumb[];
}

export const AppBreadcrumbs = ({ items }: AppBreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem key={index}>
              {!isLast ? (
                <>
                  <BreadcrumbLink asChild>
                    <Link to={item.href!}>{item.label}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
