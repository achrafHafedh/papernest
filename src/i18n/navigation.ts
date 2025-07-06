/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
