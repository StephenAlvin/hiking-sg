import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Clock, MapPin, TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import HeroSection from '@/components/sections/HeroSection';
import TrailCard from '@/components/cards/TrailCard';
import { trails } from '@/data/trails';
import { Difficulty, TrailLocation, Trail } from '@/lib/types';

const TrailsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTrails, setFilteredTrails] = useState<Trail[]>(trails);
  const [trailDetail, setTrailDetail] = useState<Trail | null>(null);
  
  // Filters
  const [selectedLocations, setSelectedLocations] = useState<TrailLocation[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [sortBy, setSortBy] = useState<string>('default');
  
  // Unique values for filters
  const locations = Array.from(new Set(trails.map(trail => trail.location)));
  const difficulties = Array.from(new Set(trails.map(trail => trail.difficulty)));
  
  useEffect(() => {
    document.title = 'Hiking Trails | SingTrails';
    
    // Check URL for trail ID
    const trailId = searchParams.get('id');
    if (trailId) {
      const selectedTrail = trails.find(trail => trail.id === trailId);
      if (selectedTrail) {
        setTrailDetail(selectedTrail);
        window.scrollTo(0, 0);
      }
    }
  }, [searchParams]);
  
  useEffect(() => {
    let filtered = [...trails];
    
    // Apply location filter
    if (selectedLocations.length > 0) {
      filtered = filtered.filter(trail => selectedLocations.includes(trail.location));
    }
    
    // Apply difficulty filter
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(trail => selectedDifficulties.includes(trail.difficulty));
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'length-asc':
        filtered.sort((a, b) => a.length - b.length);
        break;
      case 'length-desc':
        filtered.sort((a, b) => b.length - a.length);
        break;
      case 'difficulty-asc':
        filtered.sort((a, b) => {
          const difficultyOrder = { 'Easy': 1, 'Moderate': 2, 'Challenging': 3, 'Difficult': 4 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        });
        break;
      case 'difficulty-desc':
        filtered.sort((a, b) => {
          const difficultyOrder = { 'Easy': 1, 'Moderate': 2, 'Challenging': 3, 'Difficult': 4 };
          return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
        });
        break;
      case 'duration-asc':
        filtered.sort((a, b) => a.duration - b.duration);
        break;
      case 'duration-desc':
        filtered.sort((a, b) => b.duration - a.duration);
        break;
      // Default is featured first, then alphabetical
      default:
        filtered.sort((a, b) => {
          if (a.featured === b.featured) return a.name.localeCompare(b.name);
          return a.featured ? -1 : 1;
        });
    }
    
    setFilteredTrails(filtered);
  }, [selectedLocations, selectedDifficulties, sortBy]);
  
  const handleLocationChange = (location: TrailLocation, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location]);
    } else {
      setSelectedLocations(selectedLocations.filter(l => l !== location));
    }
  };
  
  const handleDifficultyChange = (difficulty: Difficulty, checked: boolean) => {
    if (checked) {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    } else {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    }
  };
  
  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedDifficulties([]);
    setSortBy('default');
  };
  
  const renderTrailDetail = () => {
    if (!trailDetail) return null;
    
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          <div className="relative h-80">
            <img 
              src={trailDetail.imageUrl} 
              alt={trailDetail.name}
              className="w-full h-full object-cover"
            />
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => {
                setTrailDetail(null);
                setSearchParams({});
              }}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{trailDetail.name}</h2>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{trailDetail.location}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-700 dark:text-emerald-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="font-medium">{trailDetail.duration} hours</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-700 dark:text-emerald-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Distance</p>
                  <p className="font-medium">{trailDetail.length} km</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-700 dark:text-emerald-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Elevation Gain</p>
                  <p className="font-medium">{trailDetail.elevation} m</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Description</h3>
              <p className="text-gray-700 dark:text-gray-300">{trailDetail.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Highlights</h3>
              <ul className="space-y-1">
                {trailDetail.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Flora</h3>
                <ul className="space-y-1">
                  {trailDetail.flora.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Fauna</h3>
                <ul className="space-y-1">
                  {trailDetail.fauna.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Time to Visit</h3>
              <div className="flex flex-wrap gap-2">
                {trailDetail.bestTimeToVisit.map((time, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button 
                className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                onClick={() => {
                  window.location.href = `/booking?trail=${trailDetail.id}`;
                }}
              >
                Book This Trail
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeroSection 
        title="Discover Singapore's Hiking Trails"
        subtitle="Explore diverse trails from peaceful nature parks to challenging forest hikes"
        ctaText="Browse Trails"
        ctaLink="#trails"
        imageSrc="https://images.pexels.com/photos/15286/pexels-photo.jpg"
      />
      
      <section id="trails" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hiking Trails</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Discover {filteredTrails.length} trails in Singapore
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {/* Sort dropdown - desktop */}
              <div className="hidden md:block">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Featured</SelectItem>
                    <SelectItem value="length-asc">Length: Low to High</SelectItem>
                    <SelectItem value="length-desc">Length: High to Low</SelectItem>
                    <SelectItem value="difficulty-asc">Difficulty: Easy to Hard</SelectItem>
                    <SelectItem value="difficulty-desc">Difficulty: Hard to Easy</SelectItem>
                    <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
                    <SelectItem value="duration-desc">Duration: Long to Short</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Mobile filters drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filter Trails</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2">Sort By</h3>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="default">Featured</SelectItem>
                          <SelectItem value="length-asc">Length: Low to High</SelectItem>
                          <SelectItem value="length-desc">Length: High to Low</SelectItem>
                          <SelectItem value="difficulty-asc">Difficulty: Easy to Hard</SelectItem>
                          <SelectItem value="difficulty-desc">Difficulty: Hard to Easy</SelectItem>
                          <SelectItem value="duration-asc">Duration: Short to Long</SelectItem>
                          <SelectItem value="duration-desc">Duration: Long to Short</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2">Location</h3>
                      <div className="space-y-2">
                        {locations.map((location) => (
                          <div key={location} className="flex items-center">
                            <Checkbox 
                              id={`mobile-location-${location}`} 
                              checked={selectedLocations.includes(location)}
                              onCheckedChange={(checked) => 
                                handleLocationChange(location as TrailLocation, checked === true)
                              }
                            />
                            <Label 
                              htmlFor={`mobile-location-${location}`}
                              className="ml-2 text-sm font-normal"
                            >
                              {location}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                      <div className="space-y-2">
                        {difficulties.map((difficulty) => (
                          <div key={difficulty} className="flex items-center">
                            <Checkbox 
                              id={`mobile-difficulty-${difficulty}`} 
                              checked={selectedDifficulties.includes(difficulty)}
                              onCheckedChange={(checked) => 
                                handleDifficultyChange(difficulty as Difficulty, checked === true)
                              }
                            />
                            <Label 
                              htmlFor={`mobile-difficulty-${difficulty}`}
                              className="ml-2 text-sm font-normal"
                            >
                              {difficulty}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
                    <DrawerClose asChild>
                      <Button>Apply Filters</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              
              {/* Desktop filters button */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="hidden md:flex">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filter Trails</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Location</h3>
                        <div className="space-y-2">
                          {locations.map((location) => (
                            <div key={location} className="flex items-center">
                              <Checkbox 
                                id={`location-${location}`} 
                                checked={selectedLocations.includes(location)}
                                onCheckedChange={(checked) => 
                                  handleLocationChange(location as TrailLocation, checked === true)
                                }
                              />
                              <Label 
                                htmlFor={`location-${location}`}
                                className="ml-2 text-sm font-normal"
                              >
                                {location}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                        <div className="space-y-2">
                          {difficulties.map((difficulty) => (
                            <div key={difficulty} className="flex items-center">
                              <Checkbox 
                                id={`difficulty-${difficulty}`} 
                                checked={selectedDifficulties.includes(difficulty)}
                                onCheckedChange={(checked) => 
                                  handleDifficultyChange(difficulty as Difficulty, checked === true)
                                }
                              />
                              <Label 
                                htmlFor={`difficulty-${difficulty}`}
                                className="ml-2 text-sm font-normal"
                              >
                                {difficulty}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
                    <DrawerClose asChild>
                      <Button>Apply Filters</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              
              {/* Active filters display */}
              {(selectedLocations.length > 0 || selectedDifficulties.length > 0) && (
                <div className="flex items-center text-sm">
                  <span className="mr-2">Active filters:</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 px-2 text-xs"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Active Filters Tags */}
          {(selectedLocations.length > 0 || selectedDifficulties.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedLocations.map(location => (
                <div 
                  key={location}
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {location}
                  <button 
                    className="ml-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    onClick={() => handleLocationChange(location, false)}
                    aria-label={`Remove ${location} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              {selectedDifficulties.map(difficulty => (
                <div 
                  key={difficulty}
                  className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {difficulty}
                  <button 
                    className="ml-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    onClick={() => handleDifficultyChange(difficulty, false)}
                    aria-label={`Remove ${difficulty} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Trail Cards */}
          {filteredTrails.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrails.map(trail => (
                <TrailCard key={trail.id} trail={trail} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No trails found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No trails match your current filter criteria. Try adjusting your filters.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Trail Safety Tips */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Hiking Safety Tips</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ensure a safe and enjoyable hiking experience with these important guidelines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Before Your Hike</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Check weather forecasts and trail conditions
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Tell someone about your hiking plans
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Pack essential items (water, snacks, first aid)
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Wear appropriate footwear and clothing
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Download offline maps of your trail
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">During Your Hike</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Stay on marked trails at all times
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Drink water regularly to stay hydrated
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Take breaks in shaded areas when needed
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Be aware of your surroundings and wildlife
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Pack out all trash you bring in
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Emergency Situations</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  For emergencies, call 995 (ambulance) or 999 (police)
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  Know your exact location or nearest trail marker
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  If lost, stay put in an open area
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  For minor injuries, use your first aid kit
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 dark:text-emerald-500 mr-2">•</span>
                  In heavy rain, seek shelter and avoid streams/rivers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-emerald-700 dark:bg-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Trails?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Book a guided hiking experience with our expert local guides for a safe and enriching adventure.
          </p>
          <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
            <Link to="/booking">Book Your Hike Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Trail detail modal */}
      {trailDetail && renderTrailDetail()}
    </div>
  );
};

export default TrailsPage;