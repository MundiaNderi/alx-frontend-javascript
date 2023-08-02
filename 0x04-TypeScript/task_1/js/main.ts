// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
//fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
//location(string) this attribute should always be defined
//Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface TeacherAttributes {
    firstName: string,
    lastName: string,
}

interface TeacherOptions {
    fullTimeEmployee: boolean,
    yearsOfExperience: number,
    location: string,
    [key: string]: any;
}

class Teacher {
    private readonly attributes: TeacherAttributes;
    private readonly options: TeacherOptions;
  
    constructor(attributes: TeacherAttributes, options: TeacherOptions) {
      this.attributes = attributes;
      this.options = options;
    }
  
    toString() {
      const result = { ...this.attributes, ...this.options };
      return `Object\n${Object.entries(result)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}`;
    }
  }
  
  export default Teacher;