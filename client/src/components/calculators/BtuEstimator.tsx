import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Info } from "lucide-react";

export default function BtuEstimator() {
  const [area, setArea] = useState<number>(0);
  const [ceilingHeight, setCeilingHeight] = useState<string>("standard");
  const [sunExposure, setSunExposure] = useState<string>("medium");
  const [result, setResult] = useState<{ btu: number; kw: number } | null>(null);

  const calculate = () => {
    if (!area) return;

    // Base calculation: 500 BTU per sq meter for standard room
    let baseBtu = area * 500;

    // Adjust for ceiling height
    if (ceilingHeight === "high") baseBtu *= 1.2;

    // Adjust for sun exposure
    if (sunExposure === "high") baseBtu *= 1.25;
    if (sunExposure === "low") baseBtu *= 0.9;

    // Round to nearest 1000
    const finalBtu = Math.round(baseBtu / 1000) * 1000;
    const kw = parseFloat((finalBtu / 3412).toFixed(1)); // Convert BTU to kW

    setResult({ btu: finalBtu, kw });
  };

  return (
    <Card className="border-secondary/20 shadow-lg bg-white overflow-hidden">
      <CardHeader className="bg-secondary/10 border-b border-secondary/10">
        <CardTitle className="flex items-center gap-2 text-slate-900">
          <Wind className="w-5 h-5 text-secondary" />
          AC Power Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="area">Room Size (m²)</Label>
            <Input 
              id="area" 
              type="number" 
              placeholder="e.g. 25" 
              value={area || ""} 
              onChange={(e) => setArea(Number(e.target.value))}
              className="border-slate-200 focus:border-secondary focus:ring-secondary"
            />
          </div>

          <div className="space-y-2">
            <Label>Ceiling Height</Label>
            <Select value={ceilingHeight} onValueChange={setCeilingHeight}>
              <SelectTrigger className="border-slate-200 focus:ring-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (2.5m - 2.8m)</SelectItem>
                <SelectItem value="high">High Ceilings (3m+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sun Exposure</Label>
            <Select value={sunExposure} onValueChange={setSunExposure}>
              <SelectTrigger className="border-slate-200 focus:ring-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (North facing / Shaded)</SelectItem>
                <SelectItem value="medium">Medium (Morning sun)</SelectItem>
                <SelectItem value="high">High (South/West facing)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calculate} 
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold"
            disabled={!area}
          >
            Calculate Requirement
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-secondary/20 animate-in fade-in slide-in-from-bottom-2">
            <p className="text-sm text-muted-foreground mb-1 text-center">Recommended Capacity</p>
            <div className="flex justify-center items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-secondary">{result.kw} kW</span>
              <span className="text-sm text-slate-500">({result.btu.toLocaleString()} BTU)</span>
            </div>
            <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
              <Info className="w-3 h-3" /> Estimate only. Site survey required.
            </p>
            <a href={`/contact?service=AC&size=${result.kw}kW`}>
              <Button variant="outline" className="w-full mt-4 border-secondary text-secondary hover:bg-secondary/10 h-8 text-sm">
                Get Quote for {result.kw}kW Unit
              </Button>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
