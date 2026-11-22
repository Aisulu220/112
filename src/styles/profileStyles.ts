import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  // AVATAR
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#DCE5FF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#EEF2FF',
  },

  avatarText: {
    fontSize: 35,
    fontWeight: '700',
    color: '#365FF5',
  },

  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#27334F',
    textAlign: 'center',
    marginTop: 8,
  },

  // FORM
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#303D5D',
    marginTop: 22,
    marginBottom: 9,
  },

  input: {
    height: 45,
    backgroundColor: '#EDF1FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 13,
    color: '#34446D',
  },

  // BUTTON
  primaryButton: {
    height: 46,
    backgroundColor: '#365FF5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginHorizontal: 10,
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // PRIVACY POLICY
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#365FF5',
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 12,
  },

  description: {
    fontSize: 13,
    color: '#687590',
    lineHeight: 22,
    marginHorizontal: 18,
    marginBottom: 15,
    textAlign: 'left',
  },

});