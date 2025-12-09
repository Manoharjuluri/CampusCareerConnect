import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Briefcase, FlaskConical, Award } from "lucide-react";
import { CollegeDetails } from "@/data/collegeDetails";
import { Button } from "@/components/ui/button";

interface CollegeDetailsModalProps {
  college: CollegeDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeDetailsModal = ({ college, isOpen, onClose }: CollegeDetailsModalProps) => {
  if (!college) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <img
              src={college.logo}
              alt={`${college.name} logo`}
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-primary">
                {college.name}
              </DialogTitle>
              <DialogDescription className="text-base mt-1">
                {college.location} • {college.ranking}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{college.description}</p>
          </div>

          {/* Highlights */}
          {college.highlights && college.highlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {college.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Courses */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">B.Tech Courses Offered</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {college.courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-primary font-semibold">•</span>
                    <span className="text-sm text-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Placements */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Placement Statistics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Average Salary</p>
                  <p className="text-2xl font-bold text-primary">{college.placements.averageSalary}</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Placement Rate</p>
                  <p className="text-2xl font-bold text-primary">{college.placements.placementRate}</p>
                </div>
                {college.placements.highestPackage && (
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Highest Package</p>
                    <p className="text-2xl font-bold text-primary">{college.placements.highestPackage}</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Top Recruiters:</p>
                <div className="flex flex-wrap gap-2">
                  {college.placements.topRecruiters.map((recruiter, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Labs */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Laboratories & Research Facilities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {college.labs.map((lab, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-primary font-semibold">•</span>
                    <span className="text-sm text-foreground">{lab}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Facilities */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">Campus Facilities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {college.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-primary font-semibold">•</span>
                    <span className="text-sm text-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeDetailsModal;

