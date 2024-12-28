import Link from "next/link";
import React from "react";
import classNames from "./bread-crumbs.module.scss";
import ArrowLeft from "./../../../../public/icons/svgs/arrow-left.svg";
import clsx from "clsx";

interface BreadcrumbPage {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadCrumbsProps {
  pages?: BreadcrumbPage[];
}

interface BreadCrumbProps {
  breadcrumb: BreadcrumbPage;
}

const BreadCrumb = ({ breadcrumb }: BreadCrumbProps) => {
  return (
    <li>
      <div className={classNames["bread-crumb"]}>
        <ArrowLeft width={16} height={16}/>
        <Link
          href={breadcrumb.href}
          aria-current={breadcrumb.current ? "page" : undefined}
          className={clsx({
            [classNames['page-link']]:true,
            [classNames['current-page']]: breadcrumb?.current
          }
        )}
        >
          {breadcrumb.name}
        </Link>
      </div>
    </li>
  );
};

const BreadCrumbs = ({ pages }: BreadCrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className={classNames['bread-crumbs']}>
      <ol role="list">
        <li>
          <div>
            <Link href={"/"} className="home">
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        {pages?.map((page) => (
          <BreadCrumb key={page?.name} breadcrumb={page} />
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
