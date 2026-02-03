import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Coins, ArrowRight } from "lucide-react";

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<number>(100);
  const [selfConsumption, setSelfConsumption] = useState<number>(40); // Percentage
  
  // Constants for Algarve (approximate)
  const costPerKwh = 0.22; // €/kWh average
  const solarProductionFactor = 1.5; // kWh produced per year per Watt installed
  
  // Calculations
  const annualBill = monthlyBill * 12;
  const annualKwhUsage = annualBill / costPerKwh;
  
  // Recommended system size (to cover ~80% of usage)
  const recommendedSystemSizeKw = (annualKwhUsage * 0.8) / 1500; 
  const roundedSystemSize = Math.ceil(recommendedSystemSizeKw * 2) / 2; // Round to nearest 0.5kW
  
  // Savings calculation
  const annualProduction = roundedSystemSize * 1500;
  const usableEnergy = annualProduction * (selfConsumption / 100);
  const annualSavings = usableEnergy * costPerKwh;
  const monthlySavings = annualSavings / 12;
  
  // Payback period (approx €1200 per kW installed)
  const estimatedSystemCost = roundedSystemSize * 1200;
  const paybackYears = estimatedSystemCost / annualSavings;

  return (
    <Card className="border-primary/20 shadow-lg bg-white overflow-hidden">
      <CardHeader className="bg-primary/10 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-slate-900">
          <Sun className="w-5 h-5 text-primary" />
          Solar Savings Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label htmlFor="bill">Monthly Electric Bill (€)</Label>
              <span className="font-bold text-slate-900">€{monthlyBill}</span>
            </div>
            <Slider 
              value={[monthlyBill]} 
              min={30} 
              max={500} 
              step={10} 
              onValueChange={(vals) => setMonthlyBill(vals[0])}
              className="py-2"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Self Consumption %</Label>
              <span className="font-bold text-slate-900">{selfConsumption}%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              How much solar energy you use directly. Add a battery to increase this to 70%+.
            </p>
            <Slider 
              value={[selfConsumption]} 
              min={20} 
              max={90} 
              step={5} 
              onValueChange={(vals) => setSelfConsumption(vals[0])}
              className="py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-orange-50 p-4 rounded-lg border border-primary/20 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Annual Savings</p>
            <p className="text-2xl font-bold text-primary">€{Math.round(annualSavings).toLocaleString()}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Payback Period</p>
            <p className="text-2xl font-bold text-slate-900">{paybackYears.toFixed(1)} <span className="text-sm font-normal text-muted-foreground">Years</span></p>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Recommended System:</span>
            <span className="font-bold text-slate-900">{roundedSystemSize} kWp</span>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold group">
            Get Quote for {roundedSystemSize}kW System
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
