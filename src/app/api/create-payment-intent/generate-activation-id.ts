export function generateActivationId(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrs0123456789';
    return Array.from(
      { length: 10 },
      () => chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }