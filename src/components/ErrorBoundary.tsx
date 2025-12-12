import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // In production, you could log to an error tracking service here
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-3 sm:p-4 md:p-6">
          <Card className="max-w-2xl w-full mx-auto">
            <CardHeader className="px-4 sm:px-6 pb-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive flex-shrink-0" />
                <CardTitle className="text-xl sm:text-2xl leading-tight">Something went wrong</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6 pb-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the home page.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg overflow-hidden">
                  <p className="text-xs sm:text-sm font-mono text-destructive mb-2 break-words">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground mb-2 hover:text-foreground transition-colors">
                        Stack Trace
                      </summary>
                      <pre className="overflow-auto max-h-32 sm:max-h-48 text-xs p-2 bg-background rounded mt-2">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <Button 
                  onClick={this.handleReset} 
                  variant="default" 
                  className="flex-1 w-full sm:w-auto"
                  size="default"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">Try Again</span>
                </Button>
                <Button 
                  onClick={this.handleGoHome} 
                  variant="outline" 
                  className="flex-1 w-full sm:w-auto"
                  size="default"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base">Go Home</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

