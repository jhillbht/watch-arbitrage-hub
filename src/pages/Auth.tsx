
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get('register') === 'true';
  const isPremium = searchParams.get('plan') === 'premium';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState<string>(isRegister ? 'register' : 'login');
  const [showPassword, setShowPassword] = useState(false);
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  useEffect(() => {
    setActiveTab(isRegister ? 'register' : 'login');
  }, [isRegister]);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to Supabase or another auth provider
    console.log('Login attempt with:', { email, password });
    
    toast({
      title: 'Login Successful',
      description: 'Redirecting to your dashboard...',
    });
    
    // Simulate login delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to Supabase or another auth provider
    console.log('Registration attempt with:', { name, email, password, isPremium });
    
    if (!agreeTerms) {
      toast({
        title: 'Please agree to terms',
        description: 'You must agree to our terms and privacy policy to continue.',
        variant: 'destructive',
      });
      return;
    }
    
    toast({
      title: 'Registration Successful',
      description: 'Your account has been created. Redirecting to dashboard...',
    });
    
    // Simulate registration delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex items-center p-4 md:p-6">
        <Link to="/" className="flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
          <span className="text-gray-600">Back to Home</span>
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8 animate-fade-up">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-watch-darkGray">WatchArbitrage</span>
              <span className="text-sm bg-watch-blue text-white px-1.5 py-0.5 rounded">Pro</span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === 'login' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-2 text-gray-600">
              {activeTab === 'login' 
                ? 'Enter your credentials to access your account'
                : `Join WatchArbitrage Pro to ${isPremium ? 'access premium features' : 'get started'}`
              }
            </p>
            
            {isPremium && activeTab === 'register' && (
              <div className="mt-3 inline-block bg-watch-blue/10 text-watch-blue text-sm px-3 py-1 rounded-full">
                Premium Plan Selected - $1,000/month
              </div>
            )}
          </div>
          
          <div className="glass-card p-6 md:p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Create Account</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-watch-blue hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="password" 
                          type={showPassword ? 'text' : 'password'} 
                          placeholder="••••••••" 
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-watch-blue hover:bg-blue-600">
                    Sign In
                  </Button>
                  
                  <div className="text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <button 
                      type="button" 
                      className="text-watch-blue hover:underline"
                      onClick={() => setActiveTab('register')}
                    >
                      Create one
                    </button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="John Doe" 
                          className="pl-10"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email-register">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email-register" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password-register">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="password-register" 
                          type={showPassword ? 'text' : 'password'} 
                          placeholder="••••••••" 
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreeTerms}
                        onCheckedChange={(checked) => setAgreeTerms(checked === true)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-watch-blue hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-watch-blue hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-watch-blue hover:bg-blue-600">
                    {isPremium ? 'Start Premium Trial' : 'Create Account'}
                  </Button>
                  
                  <div className="text-center text-sm">
                    <span className="text-gray-600">Already have an account? </span>
                    <button 
                      type="button" 
                      className="text-watch-blue hover:underline"
                      onClick={() => setActiveTab('login')}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            By continuing, you agree to WatchArbitrage Pro's Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
