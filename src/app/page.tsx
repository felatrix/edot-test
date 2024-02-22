'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GrossPieChart from '@/components/grossChart';
import ProgressBarChart from '@/components/progressBarChart';
import { Progress } from '@/components/ui/progress';

export default function Home() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋 User Admin
          </h2>
        </div>
        <div className="flex flex-row gap-4">
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Gross This Year
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="w-[100%] h-[200px]">
                {/* @ts-ignore */}
                <GrossPieChart fill="#8884d8" />
              </div>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Net This Year
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="w-[100%] h-[200px]">
                {/* @ts-ignore */}
                <GrossPieChart fill="red" />
              </div>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +28% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Your Balance
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-2xl font-bold">$80.000</p>
              <div className="flex flex-col">
                <p className="text-muted-foreground">Your Account Number</p>
                <p className="text-xl font-bold">6734-8745-8439-8432</p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                  <p className="text-muted-foreground">Account Holder</p>
                  <p className="text-md font-bold">User Admin</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-muted-foreground">Account Type</p>
                  <p className="text-md font-bold">Saving</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-row gap-4">
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Profit MileStone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-[100%] h-[200px]">
                <ProgressBarChart />
                <div className="text-2xl font-bold">+1.5</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Expenditure MileStone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-[100%] h-[200px]">
                <ProgressBarChart />
                <div className="text-2xl font-bold">+13.1</div>
                <p className="text-xs text-muted-foreground">
                  +7% from last month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ratio MileStone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-[100%] h-[200px]">
                <div className="flex flex-col gap-4">
                  <p>Profit Ratio</p>
                  <Progress value={33} />
                  <div className="text-2xl font-bold">33% for This Year</div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Expenditure Ratio</p>
                  <Progress value={67} />
                  <div className="text-2xl font-bold">33% for This Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
