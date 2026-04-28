export interface ValidationResult {
    cardNumber: string;
    cardType: string;
    isValid: boolean;
    message: string;
}
export declare function isValid(cardNumber: string): ValidationResult;
