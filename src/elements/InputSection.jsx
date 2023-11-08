
import {Grid,Select,FormControl, TextField} from '@material-ui/core';

export default function InputSection({register,data}) {

    return(
      

        <Grid item xs={12}>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                {...register("Country", { required: true })}
              >
                <MenuItem value="Egypt">Egypt</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                {/* Add more MenuItem components for other countries */}
              </Select>
          </Grid>
    )
}