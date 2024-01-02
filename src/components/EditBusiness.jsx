import { observer } from "mobx-react-lite";
import { useContext } from 'react'
import { UserContex } from "../App";
import BusinessStore from "../DataStore/BusinessStore";
import { useForm } from 'react-hook-form'


const EditBusiness = observer(() => {
    const userProperties = useContext(UserContex);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
          name: BusinessStore.bussinessData?.name,
          owner: BusinessStore.bussinessData?.owner,
          address: BusinessStore.bussinessData?.address,
          phone: BusinessStore.bussinessData?.phone,
          logo: BusinessStore.bussinessData?.logo,
          description: BusinessStore.bussinessData?.description,
        }
      });
    
      const onSubmit = (data) => {
        BusinessStore.updateBussiness(data);
        { userProperties?.setForChange(false) }
      };

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
      <p>שם העסק: </p>
      <input type="text" dir="rtl"{...register('name', { required: 'שדה חובה' })} />
      {errors.name && <p>{errors.name.message}</p>}

      <p>בעל העסק: </p>
      <input type="text" dir="rtl" {...register('owner', { required: 'שדה חובה' })} />
      {errors.owner && <p>{errors.owner.message}</p>}

      <p>כתובת: </p>
      <input type="text" dir="rtl" {...register('address', { required: 'שדה חובה' })} />
      {errors.address && <p>{errors.address.message}</p>}

      <p>טלפון: </p>
      <input type="tel" {...register('phone', { required: 'שדה חובה' })} />
      {errors.phone && <p>{errors.phone.message}</p>}

      <p>לוגו</p>
      <input type="url" {...register('logo', { required: 'שדה חובה' })} />
      {errors.logo && <p>{errors.logo.message}</p>}

      <p>פרטים נוספים:</p>
      <input type="text" dir="rtl"{...register('description', { required: 'שדה חובה' })} />
      {errors.description && <p>{errors.description.message}</p>}
      <br/>
      <br/>
      <button type="submit">שמור</button>
    </form>
       

    </>)
});

export default EditBusiness;

