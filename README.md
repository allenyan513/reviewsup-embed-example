This is an example of @reviewsup/embed-react component usage.

## Getting Started


1. Install the package:

```bash
npm i @reviewsup/embed-react@latest
```

2. Import CSS styles in your global styles or component:


src/app/globals.css
```css
@import "@reviewsup/embed-react/styles.css";
```

3. Use the component in your React application:

src/app/page.tsx
```tsx
'use client';
import {ShowcaseClient,} from "@reviewsup/embed-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <ShowcaseClient
        showcaseId={'92620b6dda4'}
      />
    </div>
  );
}
```
