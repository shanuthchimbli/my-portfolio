import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export const CoverLetter = () => {
  return (
    <section id="cover-letter" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cover <span className="gradient-text">Letter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional introduction for UK tech industry opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="max-w-4xl mx-auto">
            {/* Document header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Shanuth Chimbli</h3>
                  <p className="text-sm text-muted-foreground">DevOps Engineer</p>
                </div>
              </div>
              <button 
                className="macos-button-secondary text-sm"
                onClick={() => alert("Cover letter download will be available soon!")}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            {/* Letter content */}
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p className="text-foreground font-medium">Dear Hiring Manager,</p>
              
              <p>
                I am writing to express my strong interest in the DevOps Engineer position at your organisation. 
                With over 4.5 years of hands-on experience in designing, implementing, and optimising 
                enterprise-grade CI/CD pipelines, cloud infrastructure, and containerised environments, 
                I am confident in my ability to contribute meaningfully to your engineering team.
              </p>

              <p>
                Throughout my career at HTC Global Services and GM2, I have consistently delivered 
                measurable improvements in deployment efficiency, system reliability, and security compliance:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  "Achieved 30% reduction in deployment time through optimised CI/CD pipelines",
                  "Implemented zero-downtime deployments using blue/green strategies",
                  "Improved infrastructure compliance by 40% via Ansible automation",
                  "Managed Kubernetes clusters supporting 50+ microservices",
                ].map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>

              <p>
                My technical expertise spans across AWS cloud services, Kubernetes orchestration, 
                Terraform infrastructure as code, and comprehensive DevSecOps practices including 
                integration of security scanning tools like Vault, SonarQube, and Snyk into deployment pipelines.
              </p>

              <p>
                Having recently completed my MSc in Cloud Computing from the University of Leicester, 
                I bring both practical industry experience and current academic knowledge to the role. 
                I am authorised to work in the UK under a Graduate Visa and hold a full UK driving licence.
              </p>

              <p>
                I would welcome the opportunity to discuss how my skills and experience align with 
                your team's objectives. Thank you for considering my application.
              </p>

              <p className="text-foreground font-medium pt-4">
                Yours sincerely,<br />
                <span className="gradient-text">Shanuth Chimbli</span>
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
