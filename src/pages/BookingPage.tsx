import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar as CalendarIcon, Users, Clock, CreditCard, Info } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

import { trails } from '@/data/trails';
import { packages } from '@/data/packages';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Sample booking slots (in a real app, these would be fetched from an API)
const bookingSlots = [
  { id: '1', time: '9:00 AM', available: true },
  { id: '2', time: '10:00 AM', available: true },
  { id: '3', time: '11:00 AM', available: false },
  { id: '4', time: '1:00 PM', available: true },
  { id: '5', time: '2:00 PM', available: true },
  { id: '6', time: '3:00 PM', available: false },
];

// Form schema
const bookingFormSchema = z.object({
  packageId: z.string().min(1, { message: "Please select a package" }),
  trailId: z.string().min(1, { message: "Please select a trail" }),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string().min(1, { message: "Please select a time slot" }),
  participants: z.coerce.number().min(1).max(15),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(8, { message: "Phone number is required" }),
  specialRequests: z.string().optional(),
  payment: z.enum(["credit-card", "paypal", "bank-transfer"]),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  // Default values
  const defaultPackageId = searchParams.get('package') || '';
  const defaultTrailId = searchParams.get('trail') || '';
  
  // Set up form with default values
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      packageId: defaultPackageId,
      trailId: defaultTrailId,
      date: undefined,
      time: '',
      participants: 1,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
      payment: 'credit-card',
      agreeTerms: false,
    },
  });

  // Watch form values for package and trail to show appropriate info
  const selectedPackageId = form.watch('packageId');
  const selectedTrailId = form.watch('trailId');
  const selectedDate = form.watch('date');
  
  const selectedPackage = packages.find(pkg => pkg.id === selectedPackageId);
  const selectedTrail = trails.find(trail => trail.id === selectedTrailId);

  useEffect(() => {
    document.title = 'Book Your Hiking Tour | SingTrails';
    
    // If package is provided in URL, update available trails
    if (defaultPackageId) {
      const pkg = packages.find(p => p.id === defaultPackageId);
      if (pkg && !pkg.trailOptions.includes(defaultTrailId)) {
        form.setValue('trailId', pkg.trailOptions[0] || '');
      }
    }
  }, [defaultPackageId, defaultTrailId, form]);

  const onSubmit = (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      
      toast({
        title: "Booking Successful!",
        description: "Your hiking tour has been booked successfully. You'll receive a confirmation email shortly.",
      });
      
      // Reset form and go back to step 1
      form.reset();
      setStep(1);
    }, 1500);
  };

  const getAvailableTrails = () => {
    if (!selectedPackageId) return trails;
    
    const pkg = packages.find(p => p.id === selectedPackageId);
    if (!pkg) return trails;
    
    return trails.filter(trail => pkg.trailOptions.includes(trail.id));
  };

  const nextStep = () => {
    if (step === 1) {
      const step1Fields = ['packageId', 'trailId', 'date', 'time', 'participants'];
      const step1Valid = step1Fields.every(field => form.getFieldState(field as any).invalid === false);
      
      if (step1Valid) {
        setStep(2);
        window.scrollTo(0, 0);
      } else {
        form.trigger(['packageId', 'trailId', 'date', 'time', 'participants']);
      }
    }
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };

  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;
    
    const basePrice = selectedPackage.price;
    const participants = form.getValues('participants') || 0;
    
    return basePrice * participants;
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Book Your Hiking Adventure</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete the form below to book your guided hiking experience. We'll confirm your 
              booking within 24 hours.
            </p>
          </div>
          
          {/* Booking Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={cn(
                "flex flex-1 flex-col items-center",
                step >= 1 ? "text-emerald-700 dark:text-emerald-500" : "text-gray-400"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-2",
                  step >= 1 
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-500" 
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                )}>
                  1
                </div>
                <span className="text-sm font-medium">Tour Details</span>
              </div>
              
              <div className={cn(
                "flex-1 h-1 mx-2",
                step >= 2 ? "bg-emerald-500" : "bg-gray-200 dark:bg-gray-700"
              )}></div>
              
              <div className={cn(
                "flex flex-1 flex-col items-center",
                step >= 2 ? "text-emerald-700 dark:text-emerald-500" : "text-gray-400"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mb-2",
                  step >= 2 
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-500" 
                    : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                )}>
                  2
                </div>
                <span className="text-sm font-medium">Personal Info</span>
              </div>
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {step === 1 && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Details</CardTitle>
                      <CardDescription>Select your preferred package, trail, date, and time</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <FormField
                        control={form.control}
                        name="packageId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hiking Package</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a package" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {packages.map(pkg => (
                                  <SelectItem key={pkg.id} value={pkg.id}>
                                    {pkg.name} (${pkg.price}/person)
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Choose the package that best fits your preferences and experience level
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="trailId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trail</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={!selectedPackageId}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a trail" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {getAvailableTrails().map(trail => (
                                  <SelectItem key={trail.id} value={trail.id}>
                                    {trail.name} ({trail.difficulty})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              {!selectedPackageId 
                                ? "Please select a package first" 
                                : "Choose the trail you want to explore"}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormDescription>
                                Select a date for your hiking tour
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Time Slot</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                disabled={!selectedDate}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {bookingSlots.map(slot => (
                                    <SelectItem 
                                      key={slot.id} 
                                      value={slot.id}
                                      disabled={!slot.available}
                                    >
                                      {slot.time} {!slot.available && "(Unavailable)"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {!selectedDate 
                                  ? "Please select a date first" 
                                  : "Choose your preferred starting time"}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="participants"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Participants</FormLabel>
                            <FormControl>
                              <div className="flex items-center space-x-2">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => {
                                    const current = parseInt(field.value.toString());
                                    if (current > 1) {
                                      field.onChange(current - 1);
                                    }
                                  }}
                                  disabled={parseInt(field.value.toString()) <= 1}
                                >
                                  -
                                </Button>
                                <Input
                                  {...field}
                                  type="number"
                                  min={1}
                                  max={selectedPackage?.maxGroupSize || 15}
                                  className="w-20 text-center"
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (isNaN(value)) {
                                      field.onChange(1);
                                    } else if (value > (selectedPackage?.maxGroupSize || 15)) {
                                      field.onChange(selectedPackage?.maxGroupSize || 15);
                                    } else if (value < 1) {
                                      field.onChange(1);
                                    } else {
                                      field.onChange(value);
                                    }
                                  }}
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => {
                                    const current = parseInt(field.value.toString());
                                    const max = selectedPackage?.maxGroupSize || 15;
                                    if (current < max) {
                                      field.onChange(current + 1);
                                    }
                                  }}
                                  disabled={parseInt(field.value.toString()) >= (selectedPackage?.maxGroupSize || 15)}
                                >
                                  +
                                </Button>
                              </div>
                            </FormControl>
                            <FormDescription>
                              {selectedPackage 
                                ? `Maximum ${selectedPackage.maxGroupSize} participants for this package` 
                                : "Select the number of people in your group"}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  {/* Selected Package and Trail Info */}
                  {(selectedPackage || selectedTrail) && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Selection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue={selectedPackage ? "package" : "trail"}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="package" disabled={!selectedPackage}>Package</TabsTrigger>
                            <TabsTrigger value="trail" disabled={!selectedTrail}>Trail</TabsTrigger>
                          </TabsList>
                          
                          {selectedPackage && (
                            <TabsContent value="package" className="space-y-4">
                              <div className="relative h-40 overflow-hidden rounded-md">
                                <img 
                                  src={selectedPackage.imageUrl} 
                                  alt={selectedPackage.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold">{selectedPackage.name}</h3>
                                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{selectedPackage.duration}</span>
                                  <span className="mx-2">•</span>
                                  <Users className="h-4 w-4 mr-1" />
                                  <span>Up to {selectedPackage.maxGroupSize} people</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                  {selectedPackage.description}
                                </p>
                                
                                <div className="mt-4">
                                  <h4 className="text-sm font-medium mb-1">What's included:</h4>
                                  <ul className="text-sm space-y-1">
                                    {selectedPackage.includes.slice(0, 5).map((item, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                    {selectedPackage.includes.length > 5 && (
                                      <li className="text-sm italic text-gray-500 dark:text-gray-400 ml-6">
                                        +{selectedPackage.includes.length - 5} more inclusions
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </TabsContent>
                          )}
                          
                          {selectedTrail && (
                            <TabsContent value="trail" className="space-y-4">
                              <div className="relative h-40 overflow-hidden rounded-md">
                                <img 
                                  src={selectedTrail.imageUrl} 
                                  alt={selectedTrail.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold">{selectedTrail.name}</h3>
                                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  <span className={cn(
                                    "px-2 py-0.5 rounded-full text-xs",
                                    selectedTrail.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                    selectedTrail.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                    selectedTrail.difficulty === 'Challenging' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                  )}>
                                    {selectedTrail.difficulty}
                                  </span>
                                  <span className="mx-2">•</span>
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>Approx. {selectedTrail.duration} hours</span>
                                  <span className="mx-2">•</span>
                                  <span>{selectedTrail.length} km</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                  {selectedTrail.shortDescription}
                                </p>
                              </div>
                            </TabsContent>
                          )}
                        </Tabs>
                      </CardContent>
                      <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center text-lg font-semibold mb-1">
                            <span>Total Price:</span>
                            <span className="text-emerald-700 dark:text-emerald-500">
                              ${calculateTotalPrice().toFixed(2)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedPackage?.price && form.watch('participants') > 0 && (
                              <>
                                ${selectedPackage.price} per person × {form.watch('participants')} {form.watch('participants') === 1 ? 'person' : 'people'}
                              </>
                            )}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  )}
                  
                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                    >
                      Continue to Personal Information
                    </Button>
                  </div>
                </>
              )}
              
              {step === 2 && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Please provide your contact details for booking confirmation</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" />
                              </FormControl>
                              <FormDescription>
                                We'll send your booking confirmation to this email
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormDescription>
                                For emergency contact and last-minute updates
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests or Requirements</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Any dietary restrictions, accessibility needs, or other special requests"
                                rows={3}
                              />
                            </FormControl>
                            <FormDescription>
                              Please let us know of any special needs or requests
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Choose your preferred payment method</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name="payment"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-3 space-y-0">
                                  <RadioGroupItem value="credit-card" id="credit-card" />
                                  <Label htmlFor="credit-card" className="flex items-center">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    Credit Card
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-3 space-y-0">
                                  <RadioGroupItem value="paypal" id="paypal" />
                                  <Label htmlFor="paypal">PayPal</Label>
                                </div>
                                <div className="flex items-center space-x-3 space-y-0">
                                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                                  <Label htmlFor="bank-transfer">Bank Transfer</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {form.watch('payment') === 'credit-card' && (
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <div className="flex items-center mb-4">
                            <Info className="h-5 w-5 text-blue-500 mr-2" />
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              Credit card details will be collected after booking confirmation
                            </p>
                          </div>
                          
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            For security, we will send you a secure payment link after your booking is confirmed. 
                            No payment will be charged until confirmation.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="agreeTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions, cancellation policy, and safety guidelines
                            </FormLabel>
                            <FormDescription>
                              By checking this box, you acknowledge that you have read and understood our 
                              <a href="/terms" className="text-emerald-700 dark:text-emerald-500 hover:underline ml-1">
                                terms of service
                              </a>.
                            </FormDescription>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                      >
                        Back to Tour Selection
                      </Button>
                      
                      <Button 
                        type="submit"
                        className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          'Complete Booking'
                        )}
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;