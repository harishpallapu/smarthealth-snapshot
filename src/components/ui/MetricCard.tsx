
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  onClick?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  icon,
  className,
  footer,
  trend,
  trendValue,
  onClick
}) => {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-slate-500';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card 
        className={cn(
          "overflow-hidden backdrop-blur-sm bg-white/80 border-slate-200/70 shadow-sm hover:shadow-md transition-all cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon && <div className="opacity-70">{icon}</div>}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">{value}</div>
          {description && <CardDescription className="mt-2 text-xs">{description}</CardDescription>}
          {trend && trendValue && (
            <div className={`flex items-center mt-2 text-xs ${getTrendColor()}`}>
              <span>{getTrendIcon()}</span>
              <span className="ml-1">{trendValue}</span>
            </div>
          )}
        </CardContent>
        {footer && <CardFooter className="pt-0">{footer}</CardFooter>}
      </Card>
    </motion.div>
  );
};

export default MetricCard;
