// src/intl-tel-input.d.ts
declare module 'intl-tel-input' {
    interface IntlTelInputOptions {
      initialCountry?: string;
      geoIpLookup?: (callback: (countryCode: string) => void) => void;
      utilsScript?: string;
    }
  
    interface IntlTelInput {
      setCountry(countryCode: string): void;
      getNumber(): string;
    }
  
    function intlTelInput(node: HTMLInputElement, options?: IntlTelInputOptions): IntlTelInput;
  
    export default intlTelInput;
  }
  