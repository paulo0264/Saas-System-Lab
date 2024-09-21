import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ContactCard = ({ icon, title, description, color }) => (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        {icon}
        <CardTitle className={`text-xl md:text-2xl text-${color}-400`}>{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
  
  export default ContactCard;