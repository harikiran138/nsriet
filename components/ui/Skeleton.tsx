/**
 * Skeleton Component - Loading State UI
 * Displays a animated skeleton placeholder while content is loading
 */

interface SkeletonProps {
  /**
   * Type of skeleton to display
   * @default 'text'
   */
  variant?: 'text' | 'card' | 'circle' | 'avatar' | 'button';
  
  /**
   * Width of the skeleton (in px or percentage)
   * @default 'w-full'
   */
  width?: string;
  
  /**
   * Height of the skeleton (in px or percentage)
   * @default depends on variant
   */
  height?: string;
  
  /**
   * Number of lines to display (for text variant)
   * @default 1
   */
  lines?: number;
  
  /**
   * Rounded corner style
   * @default 'rounded'
   */
  rounded?: 'rounded' | 'rounded-lg' | 'rounded-full' | 'rounded-xl';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function Skeleton({
  variant = 'text',
  width = 'w-full',
  height,
  lines = 1,
  rounded = 'rounded-lg',
  className = '',
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700';
  
  const variantClasses = {
    text: `h-4 ${width}`,
    card: `${width} ${height || 'h-48'} ${rounded}`,
    circle: `w-12 h-12 rounded-full`,
    avatar: `w-10 h-10 rounded-full`,
    button: `${width} h-10 ${rounded}`,
  };

  const selectedHeight = height || variantClasses[variant];

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${baseClasses} h-4 ${width} ${i === lines - 1 ? 'w-3/4' : ''}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${selectedHeight} ${rounded} ${className}`}
    />
  );
}

/**
 * Skeleton Grid - Display multiple skeleton items in a grid
 */
interface SkeletonGridProps {
  /**
   * Number of items to display
   * @default 3
   */
  count?: number;
  
  /**
   * Grid columns
   * @default 'grid-cols-1 md:grid-cols-3'
   */
  gridClassName?: string;
  
  /**
   * Skeleton variant
   * @default 'card'
   */
  variant?: 'text' | 'card' | 'circle' | 'avatar' | 'button';
}

export function SkeletonGrid({
  count = 3,
  gridClassName = 'grid-cols-1 md:grid-cols-3',
  variant = 'card',
}: SkeletonGridProps) {
  return (
    <div className={`grid ${gridClassName} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} variant={variant} />
      ))}
    </div>
  );
}
