import { useForm ,Controller} from "react-hook-form";

import {
  Box,
  InputLabel,
  Input,
  FormControl,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  
  FormLabel,
  Typography
} from "@mui/material";

export default function DomainForm() {
 
  const formFields = [
    {gridSize:6, name: "First name", rules: { required: true, maxLength: 100 } },
    {gridSize:6, name: "Last name", rules: { required: true, maxLength: 100 } },
    {gridSize:6, name: "Company Name", rules: { required: true, maxLength: 50 } },
    {gridSize:6, name: "Email", rules: { required: true, pattern: /^\S+@\S+$/i } },
    {gridSize:12, name: "Address Line 1", rules: { required: true, pattern: /^\S+@\S+$/i } },
    {gridSize:12, name: "Address Line 2", rules: { required: true, pattern: /^\S+@\S+$/i } },
    {gridSize:6, name: "City", rules: { required: true, maxLength: 80 } },
    {gridSize:6, name: "State", rules: { required: true, maxLength: 80 } },
    {gridSize:6, name: "Phone", rules: { required: true, maxLength: 80 } },
    {gridSize:6, name: "ZipCode", rules: { required: true, maxLength: 80 } },
  ];

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) =>{
    // addData(data)
    const formData=new FormData();
    for (const key in data) {
      formData.append(key,data[key])
    }
    console.log(data);
    reset();
  }
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: "0 1rem", width: "100%" }}>
      <FormControl  >
        <Grid container spacing={2}>
        {formFields.map((field) => (
            <Grid item xs={12} sm={field.gridSize} key={field.name}>
              {field.name}
              <Controller
              rules={{required:true}}
                name={field.name}
                control={control}
                defaultValue=""
                render={({ field , fieldState: { error } }) => <TextField 
                color={error ? "error" : "secondary"}
                helperText={error ? error.message : ""}
                size="small"
                InputProps={{
                  style: { borderRadius: 50 
                  ,
                height:'40px'}
                }}
                id={field.name}
                fullWidth
                {...field} />}
              />
           
              {errors[field.name] && <Typography color='red' fontSize={10}>{field.name} is required</Typography>}
            </Grid>
          ))}
    
         
          <Grid item xs={12}>
            <FormControl fullWidth>
             Country
              <Select
                labelId="country-label"
                defaultValue="Egypt"
                id="country"
                sx={{
                  borderRadius: 50,
                  height: "40px",
                }}
                label='Country'
                {...register("Country", { required: true })}
              >
                <MenuItem value="Egypt">Egypt</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
    <Button
      variant="contained"
      color="success"
      type="submit"
      onClick={handleSubmit(onSubmit)}
      sx={{
        borderRadius: "21px",
        textTransform: "none",
        width: "160px",
        height: "40px",
      }}
    >
      Buy Now
    </Button>
  </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
}
