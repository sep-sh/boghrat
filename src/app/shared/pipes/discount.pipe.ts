import { Pipe, PipeTransform } from "@angular/core";

type DiscountStep = {
    stepSize: number; 
    percentage: number;
    max: number;
    min: number;
};

@Pipe({
    name: "discount",
})
export class DiscountPipe implements PipeTransform {
    private DISCOUNT_STEPS: DiscountStep[] = [
        { stepSize: 50000000, percentage: 0.05, max: 1500000, min: 500000 },
        { stepSize: 40000000, percentage: 0.03, max: 1000000, min: 500000 },
        { stepSize: 30000000, percentage: 0.01, max: 200000, min: 50000 },
    ];

    calculateStepDiscount(price: number, step: DiscountStep): number {
        const discount = price * step.percentage;
        return Math.min(Math.max(discount, step.min), step.max);
    }

    transform(price: number): number {
        if (price <= 0) return 0; 
        let totalDiscount = 0;

        for (const step of this.DISCOUNT_STEPS.slice(0, -1)) {
            if (price > step.stepSize) {
                totalDiscount += this.calculateStepDiscount(step.stepSize, step);
                price -= step.stepSize;
            } else {
                totalDiscount += this.calculateStepDiscount(price, step);
                return totalDiscount;
            }
        }

        const lastStep = this.DISCOUNT_STEPS[this.DISCOUNT_STEPS.length - 1];
        const parts = Math.floor(price / lastStep.stepSize);
        const remainingPrice = price % lastStep.stepSize;

        totalDiscount += parts * this.calculateStepDiscount(lastStep.stepSize, lastStep);

        if (remainingPrice > 0) {
            totalDiscount += this.calculateStepDiscount(remainingPrice, lastStep);
        }

        return totalDiscount
    }
}
