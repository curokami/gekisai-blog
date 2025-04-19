// src/lib/utils.ts
export function generateFileName(title: string, date: Date = new Date()): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const datePart = `${yyyy}-${mm}-${dd}`;
  
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  
    return `${datePart}-${slug}.md`;
  }