export function IconMapPin({ width = 16, height = 16, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 18.3333C13.3333 15 16.6667 12.1818 16.6667 8.33333C16.6667 4.65143 13.6819 1.66667 10 1.66667C6.3181 1.66667 3.33333 4.65143 3.33333 8.33333C3.33333 12.1818 6.66667 15 10 18.3333Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconStar({ width = 16, height = 16, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.33333L10.06 5.50667L14.6667 6.18L11.3333 9.42667L12.12 14L8 11.8333L3.88 14L4.66667 9.42667L1.33333 6.18L5.94 5.50667L8 1.33333Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconHeart({ width = 24, height = 24, isFavorite = false, className = '', onClick }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={isFavorite ? "#E44848" : "none"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.1917 3.5783 3.16 4.61C2.1283 5.6417 1.54871 7.04096 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61V4.61Z"
        stroke={isFavorite ? "#E44848" : "#101828"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconAC({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5V17.5M2.5 10H17.5M4.69667 4.69667L15.3033 15.3033M15.3033 4.69667L4.69667 15.3033" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconAutomatic({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4.16667V15.8333M15 4.16667V15.8333M10 4.16667V15.8333M5 10H15" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconKitchen({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2.5V8.33333C5 9.71405 6.11929 10.8333 7.5 10.8333V17.5M10 2.5V17.5M15 2.5V7.5C15 8.88071 13.8807 10 12.5 10H10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconTV({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4.16667" width="15" height="11.6667" rx="1.5" stroke="#101828" strokeWidth="1.5"/>
      <path d="M6.66667 17.5L13.3333 17.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBathroom({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 10H16.6667V13.3333C16.6667 15.1743 15.1743 16.6667 13.3333 16.6667H6.66667C4.82572 16.6667 3.33333 15.1743 3.33333 13.3333V10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83333 10V5C5.83333 3.89543 6.72876 3 7.83333 3H9.16667" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconEngine({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7.5H12.5V15H2.5V7.5Z" stroke="#101828" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12.5 10H15.8333L17.5 12.5V15H12.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5V7.5M10 5V7.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconRadio({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="6.66667" width="15" height="10" rx="1.5" stroke="#101828" strokeWidth="1.5"/>
      <circle cx="6.66667" cy="11.6667" r="1.66667" stroke="#101828" strokeWidth="1.5"/>
      <path d="M5 3.33333L13.3333 6.66667" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconRefrigerator({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4.16667" y="2.5" width="11.6667" height="15" rx="1.5" stroke="#101828" strokeWidth="1.5"/>
      <path d="M4.16667 8.33333H15.8333" stroke="#101828" strokeWidth="1.5"/>
      <path d="M6.66667 5.00003V6.6667M6.66667 10.8333V13.3333" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMicrowave({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4.16667" width="15" height="11.6667" rx="1.5" stroke="#101828" strokeWidth="1.5"/>
      <path d="M13.3333 4.16667V15.8333" stroke="#101828" strokeWidth="1.5"/>
      <path d="M5.83333 8.33333H10M5.83333 11.6667H10" stroke="#101828" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconGas({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5C10 2.5 14.1667 7.5 14.1667 11.6667C14.1667 13.9678 12.3012 15.8333 10 15.8333C7.69881 15.8333 5.83333 13.9678 5.83333 11.6667C5.83333 7.5 10 2.5 10 2.5Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconWater({ width = 20, height = 20, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3.33333C10 3.33333 15 8.33333 15 12.5C15 15.2614 12.7614 17.5 10 17.5C7.23858 17.5 5 15.2614 5 12.5C5 8.33333 10 3.33333 10 3.33333Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconVan({ width = 32, height = 32, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10H20V22H4V10Z" stroke="#101828" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M20 14H25L28 17V22H20V14Z" stroke="#101828" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="8" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
      <circle cx="24" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
    </svg>
  );
}

export function IconFullyIntegrated({ width = 32, height = 32, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10C3 8.89543 3.89543 8 5 8H27C28.1046 8 29 8.89543 29 10V22H3V10Z" stroke="#101828" strokeWidth="2"/>
      <circle cx="8" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
      <circle cx="24" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
    </svg>
  );
}

export function IconAlcove({ width = 32, height = 32, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 14H29V22H3V14Z" stroke="#101828" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M7 8H20V14H7V8Z" stroke="#101828" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="8" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
      <circle cx="24" cy="24" r="2" stroke="#101828" strokeWidth="2"/>
    </svg>
  );
}
